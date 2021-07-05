"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushRoute = exports.toggleWindow = void 0;
/**
 * toggleWindow
 */
const toggleWindow = (win) => {
    win.isMinimized() ? win.restore() : win.minimize();
};
exports.toggleWindow = toggleWindow;
/**
 * pushRoute
 */
const pushRoute = (win, routeName) => {
    const webContents = win?.webContents;
    if (!webContents)
        return;
    webContents.send('push-route', { name: routeName });
    win.restore();
    win.focus();
};
exports.pushRoute = pushRoute;
