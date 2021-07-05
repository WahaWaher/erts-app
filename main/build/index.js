"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appLock_1 = require("./appLock");
const ipcHandlers_1 = require("./ipc/ipcHandlers");
const appStore_1 = require("./stores/appStore");
const mainTray_1 = require("./tray/mainTray");
const pkgUtils_1 = require("./utils/pkgUtils");
const mainWindow_1 = require("./windows/mainWindow");
const dotenv_1 = __importDefault(require("dotenv"));
const electron_1 = require("electron");
const electron_is_dev_1 = __importDefault(require("electron-is-dev"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
pkgUtils_1.getPkgInfo();
appLock_1.appLock(() => {
    const appStore = appStore_1.createAppStore();
    const mainWindow = mainWindow_1.createMainWindow();
    const mainTray = mainTray_1.createMainTray({ mainWindow });
    ipcHandlers_1.setIpcHandlers({ mainWindow });
    if (electron_is_dev_1.default) {
        const { default: installExtension, REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS, } = require('electron-devtools-installer');
        const devToolsOptions = {
            mode: 'detach',
        };
        // Load chrome devtools
        mainWindow.webContents.once('dom-ready', () => {
            mainWindow.webContents.openDevTools(devToolsOptions);
        });
        // Register shortcut for devtools reloding
        electron_1.globalShortcut.register('CommandOrControl+5', () => {
            mainWindow.webContents.closeDevTools();
            mainWindow.webContents.openDevTools(devToolsOptions);
        });
        // Main window — always on top
        mainWindow.setAlwaysOnTop(true);
        installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS]);
        /**
         * Reloading on file changes
         * https://github.com/yan-foto/electron-reload
         */
        require('electron-reload')(__dirname, {
            forceHardReset: true,
            electron: path_1.default.join(process.cwd(), 'node_modules', 'electron', 'dist', 'electron.exe'),
        });
        /**
         * Debug Tools
         * https://github.com/sindresorhus/electron-debug
         */
        require('electron-debug')();
    }
});
electron_1.app.on('activate', () => {
    if (electron_1.BrowserWindow.getAllWindows().length === 0)
        mainWindow_1.createMainWindow();
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
