import { BrowserWindow } from 'electron';

/**
 * toggleWindow
 */
const toggleWindow = (win: BrowserWindow): void => {
  win.isMinimized() ? win.restore() : win.minimize();
};

/**
 * pushRoute
 */
const pushRoute = (win: BrowserWindow, routeName: string): void => {
  const webContents = win?.webContents;

  if (!webContents) return;

  webContents.send('push-route', { name: routeName });
  win.restore();
  win.focus();
};

export { toggleWindow, pushRoute };
