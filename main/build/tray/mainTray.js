"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMainTray = void 0;
const electron_1 = require("electron");
const actions_1 = require("../windows/actions");
const pathUtils_1 = require("../utils/pathUtils");
const pkgUtils_1 = require("../utils/pkgUtils");
let mainTray = null;
const createMainTray = ({ mainWindow }) => {
    const favIcon = pathUtils_1.getAssetsPath('favicon.ico');
    const nImage = electron_1.nativeImage.createFromPath(favIcon);
    mainTray = new electron_1.Tray(nImage);
    mainTray.setContextMenu(electron_1.Menu.buildFromTemplate([
        {
            label: 'Show/Hide',
            click: () => actions_1.toggleWindow(mainWindow),
        },
        { type: 'separator' },
        {
            label: 'Home',
            click: () => actions_1.pushRoute(mainWindow, 'home'),
        },
        {
            label: 'About',
            click: () => actions_1.pushRoute(mainWindow, 'about'),
        },
        { type: 'separator' },
        { label: 'Quit', role: 'quit' },
    ]));
    mainTray.setToolTip(pkgUtils_1.pkg?.appTitle || '');
    mainTray.on('click', () => actions_1.toggleWindow(mainWindow));
    return mainTray;
};
exports.createMainTray = createMainTray;
