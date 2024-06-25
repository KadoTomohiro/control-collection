import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { Schema as CustomControlShema } from './schema';

// generate function of custom-control
export function generate(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function customControl(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}
