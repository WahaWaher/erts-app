import { getAssetsPath } from '@/utils/pathUtils';
import { pkg } from '@/utils/pkgUtils';
import { BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import windowStateKeeper from 'electron-window-state';
import path from 'path';

const { APP_UI_PORT } = process.env;

let mainWindow: Electron.BrowserWindow | null;

export const createMainWindow = () => {
  let wState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 400,
  });

  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: pkg?.appTitle,
    icon: getAssetsPath('favicon.ico'),
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

  mainWindow.loadURL(
    isDev
      ? `http://localhost:${APP_UI_PORT}`
      : `file://${path.join(__dirname, '../../ui/index.html')}`
  );

  return mainWindow;
};

export const getMainWindow = () => mainWindow;
