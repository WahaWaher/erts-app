"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pkg = exports.getPkgInfo = void 0;
const electron_1 = require("electron");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let pkg = null;
exports.pkg = pkg;
const getPkg = () => {
    try {
        const pkgPath = path_1.default.resolve(electron_1.app.getAppPath(), 'package.json');
        const pkgData = fs_1.default.readFileSync(pkgPath, 'utf-8');
        exports.pkg = pkg = JSON.parse(pkgData);
        return pkg;
    }
    catch (e) {
        console.error(e);
        return null;
    }
};
const getPkgInfo = () => pkg || getPkg();
exports.getPkgInfo = getPkgInfo;
