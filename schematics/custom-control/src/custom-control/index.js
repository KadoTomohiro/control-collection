"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customControl = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
// create host function
function createHost(tree) {
    return {
        readFile(path) {
            return __awaiter(this, void 0, void 0, function* () {
                const data = tree.read(path);
                if (!data) {
                    throw new schematics_1.SchematicsException('File not found.');
                }
                return core_1.virtualFs.fileBufferToString(data);
            });
        },
        writeFile(path, data) {
            return __awaiter(this, void 0, void 0, function* () {
                return tree.overwrite(path, data);
            });
        },
        isDirectory(path) {
            return __awaiter(this, void 0, void 0, function* () {
                return !tree.exists(path) && tree.getDir(path).subfiles.length > 0;
            });
        },
        isFile(path) {
            return __awaiter(this, void 0, void 0, function* () {
                return tree.exists(path);
            });
        },
    };
}
// generate function of custom-control
function customControl(options) {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const host = createHost(tree);
        const { workspace } = yield core_1.workspaces.readWorkspace('/', host);
        const project = options.project != null ? workspace.projects.get(options.project) : null;
        if (!project) {
            throw new schematics_1.SchematicsException(`Invalid project name: ${options.project}`);
        }
        const projectType = project.extensions.projectType === 'application' ? 'app' : 'lib';
        if (options.path === undefined) {
            options.path = `${project.sourceRoot}/${projectType}`;
        }
        const prefix = (_a = project.prefix) !== null && _a !== void 0 ? _a : 'app';
        const valueType = options.valueType === 'array' ? '[]' : (_b = options.valueType) !== null && _b !== void 0 ? _b : 'any';
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
            (0, schematics_1.applyTemplates)({
                classify: core_1.strings.classify,
                dasherize: core_1.strings.dasherize,
                name: options.name,
                prefix,
                valueType
            }),
            (0, schematics_1.move)((0, core_1.normalize)(options.path)),
        ]);
        return (0, schematics_1.chain)([(0, schematics_1.mergeWith)(templateSource)]);
    });
}
exports.customControl = customControl;
//# sourceMappingURL=index.js.map