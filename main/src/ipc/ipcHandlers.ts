import { getAppStore } from '@/stores/appStore';
import { ipcMain } from 'electron';

type IpcOptions = {
  mainWindow: Electron.BrowserWindow;
};

const setIpcHandlers = ({ mainWindow }: IpcOptions): void => {
  /**
   * app-close
   */
  ipcMain.handle('app-close', (e) => mainWindow.close());

  /**
   * app-minimize
   */
  ipcMain.handle('app-minimize', (e) => mainWindow.minimize());

  /**
   * app-is-minimized
   */
  ipcMain.handle('app-is-minimized', () => mainWindow.isMinimized());

  /**
   * get-app-store
   */
  ipcMain.handle('get-app-store', () => getAppStore().store);

  /**
   * set-app-store
   */
  ipcMain.handle(
    'set-app-store',
    (e, { path, data }: { path: string; data: unknown }) =>
      getAppStore().set(path, data)
  );
};

export { setIpcHandlers };
