import { IpcRenderer } from 'electron';

export const ipcRenderer: IpcRenderer = require('electron').ipcRenderer;

/**
 * Close Main Window
 */
export const closeMainWindow = () => {
  return ipcRenderer.invoke('app-close');
};

/**
 * Minimize Main Window
 */
export const minimizeMainWindow = () => {
  return ipcRenderer.invoke('app-minimize');
};

/**
 * Main Window is minimized
 */
export const isMainWindowMinimized = () => {
  return ipcRenderer.invoke('app-is-minimized');
};

/**
 * fetchAppStore
 */
export const fetchAppStore = async (): Promise<any> => {
  try {
    const res = await ipcRenderer.invoke('get-app-store');

    if (res) {
      return res;
    }

    throw res;
  } catch (e) {
    console.error(e);
  }
};

/**
 * saveAppStore
 */
export const writeAppStore = async (
  path: string,
  data: any
): Promise<undefined> => {
  try {
    return ipcRenderer.invoke('set-app-store', { path, data });
  } catch (e) {
    console.error(e);
  }
};
