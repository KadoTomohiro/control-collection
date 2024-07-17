import {
  apply,
  applyTemplates, chain, mergeWith, move,
  Rule,
  SchematicsException, strings,
  Tree,
  url
} from '@angular-devkit/schematics';
import {normalize, virtualFs, workspaces} from "@angular-devkit/core";

import {Schema as ControlSchema} from './schema';
import {parseName} from "./parseName";


function createHost(tree: Tree): workspaces.WorkspaceHost {
  return {
    async readFile(path: string): Promise<string> {
      const data = tree.read(path);
      if (!data) {
        throw new SchematicsException('File not found.');
      }
      return virtualFs.fileBufferToString(data);
    },
    async writeFile(path: string, data: string): Promise<void> {
      return tree.overwrite(path, data);
    },
    async isDirectory(path: string): Promise<boolean> {
      return !tree.exists(path) && tree.getDir(path).subfiles.length > 0;
    },
    async isFile(path: string): Promise<boolean> {
      return tree.exists(path);
    },
  };
}


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function control(options: ControlSchema): Rule {
  return async (tree: Tree) => {
    const host = createHost(tree);
    const {workspace} = await workspaces.readWorkspace('/', host);
    const project = options.project != null ? workspace.projects.get(options.project) : null;
    if (!project) {
      throw new SchematicsException(`Invalid project name: ${options.project}`);
    }
    const projectType = project.extensions.projectType === 'application' ? 'app' : 'lib';
    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/${projectType}`;
    }

    const parsedPath = parseName(options.path, options.name);
    options.name = parsedPath.name;
    options.path = parsedPath.path;

    const prefix = project.prefix

    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        camelize: strings.camelize,
        name: options.name,
        prefix,
      }),
      move(normalize(options.path as string)),
    ]);
    return chain([mergeWith(templateSource)]);
  };
}
