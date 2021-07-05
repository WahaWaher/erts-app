"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appLock = void 0;
const electron_1 = require("electron");
const mainWindow_1 = require("./windows/mainWindow");
const appLock = async (whenReady = () => { }) => {
    const gotTheLock = electron_1.app.requestSingleInstanceLock();
    if (!gotTheLock) {
        electron_1.app.quit();
    }
    else {
        electron_1.app.on('second-instance', () => {
            const mainWindow = mainWindow_1.getMainWindow();
            if (mainWindow) {
                if (mainWindow.isMinimized()) {
                    mainWindow.restore();
                }
                mainWindow.focus();
            }
        });
        await electron_1.app.whenReady();
        whenReady();
    }
};
exports.appLock = appLock;
