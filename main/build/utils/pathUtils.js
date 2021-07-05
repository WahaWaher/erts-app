"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssetsPath = void 0;
const path_1 = __importDefault(require("path"));
const electron_is_dev_1 = __importDefault(require("electron-is-dev"));
const electron_1 = require("electron");
const getAssetsPath = (subPath = '') => path_1.default.resolve(electron_1.app.getAppPath(), electron_is_dev_1.default ? 'assets' : 'src/ui', subPath);
exports.getAssetsPath = getAssetsPath;
