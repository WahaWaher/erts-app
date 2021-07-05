"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppStore = exports.createAppStore = void 0;
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
const electron_store_1 = __importDefault(require("electron-store"));
const electron_is_dev_1 = __importDefault(require("electron-is-dev"));
const defaults = {
    common: {
        test: '',
    },
};
let appStore;
/**
 * createAppStore
 */
const createAppStore = () => {
    appStore = new electron_store_1.default({
        name: 'app-store',
        cwd: electron_is_dev_1.default ? path_1.default.resolve(process.cwd(), 'temp') : electron_1.app.getPath('userData'),
        defaults,
    });
    return appStore;
};
exports.createAppStore = createAppStore;
/**
 * getAppStore
 */
const getAppStore = () => appStore;
exports.getAppStore = getAppStore;
