"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setIpcHandlers = void 0;
const appStore_1 = require("../stores/appStore");
const electron_1 = require("electron");
const setIpcHandlers = ({ mainWindow }) => {
    /**
     * app-close
     */
    electron_1.ipcMain.handle('app-close', (e) => mainWindow.close());
    /**
     * app-minimize
     */
    electron_1.ipcMain.handle('app-minimize', (e) => mainWindow.minimize());
    /**
     * app-is-minimized
     */
    electron_1.ipcMain.handle('app-is-minimized', () => mainWindow.isMinimized());
    /**
     * get-app-store
     */
    electron_1.ipcMain.handle('get-app-store', () => appStore_1.getAppStore().store);
    /**
     * set-app-store
     */
    electron_1.ipcMain.handle('set-app-store', (e, { path, data }) => appStore_1.getAppStore().set(path, data));
};
exports.setIpcHandlers = setIpcHandlers;
