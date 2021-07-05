import { appLock } from '@/appLock';
import { setIpcHandlers } from '@/ipc/ipcHandlers';
import { createAppStore, getAppStore } from '@/stores/appStore';
import { createMainTray } from '@/tray/mainTray';
import { getPkgInfo } from '@/utils/pkgUtils';
import { createMainWindow } from '@/windows/mainWindow';
import dotenv from 'dotenv';
import { app, BrowserWindow, globalShortcut } from 'electron';
import isDev from 'electron-is-dev';
import path from 'path';

dotenv.config();
getPkgInfo();

appLock(() => {
  const appStore = createAppStore();
  const mainWindow = createMainWindow();
  const mainTray = createMainTray({ mainWindow });

  setIpcHandlers({ mainWindow });

  if (isDev) {
    const {
      default: installExtension,
      REDUX_DEVTOOLS,
      REACT_DEVELOPER_TOOLS,
    } = require('electron-devtools-installer');

    const devToolsOptions: Electron.OpenDevToolsOptions = {
      mode: 'detach',
    };

    // Load chrome devtools
    mainWindow.webContents.once('dom-ready', () => {
      mainWindow.webContents.openDevTools(devToolsOptions);
    });

    // Register shortcut for devtools reloding
    globalShortcut.register('CommandOrControl+5', () => {
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
      electron: path.join(
        process.cwd(),
        'node_modules',
        'electron',
        'dist',
        'electron.exe'
      ),
    });

    /**
     * Debug Tools
     * https://github.com/sindresorhus/electron-debug
     */
    require('electron-debug')();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
