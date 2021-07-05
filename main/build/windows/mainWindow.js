"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMainWindow = exports.createMainWindow = void 0;
const pathUtils_1 = require("../utils/pathUtils");
const pkgUtils_1 = require("../utils/pkgUtils");
const electron_1 = require("electron");
const electron_is_dev_1 = __importDefault(require("electron-is-dev"));
const electron_window_state_1 = __importDefault(require("electron-window-state"));
const path_1 = __importDefault(require("path"));
const { APP_UI_PORT } = process.env;
let mainWindow;
const createMainWindow = () => {
    let wState = electron_window_state_1.default({
        defaultWidth: 800,
        defaultHeight: 400,
    });
    // Create the browser window.
    mainWindow = new electron_1.BrowserWindow({
        title: pkgUtils_1.pkg?.appTitle,
        icon: pathUtils_1.getAssetsPath('favicon.ico'),
        minWidth: 400,
        // maxWidth: 385,
        minHeight: 400,
        // maxHeight: 545,
        // frame: false,
        skipTaskbar: true,
        fullscreenable: false,
        backgroundColor: '#fff',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: false,
        },
        width: wState.width,
        height: wState.height,
        x: wState.x,
        y: wState.y,
    });
    wState.manage(mainWindow);
    mainWindow.removeMenu();
    mainWindow.webContents.on('will-navigate', (e, url) => {
        if (mainWindow && url !== mainWindow.webContents.getURL()) {
            e.preventDefault();
            open(url);
        }
    });
    mainWindow.on('closed', () => {
        mainWindow && mainWindow.destroy();
    });
    mainWindow.loadURL(electron_is_dev_1.default
        ? `http://localhost:${APP_UI_PORT}`
        : `file://${path_1.default.join(__dirname, '../../ui/index.html')}`);
    return mainWindow;
};
exports.createMainWindow = createMainWindow;
const getMainWindow = () => mainWindow;
exports.getMainWindow = getMainWindow;
