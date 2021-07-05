import { app } from 'electron';
import path from 'path';
import Store from 'electron-store';
import ElectronStore from 'electron-store';
import isDev from 'electron-is-dev';

const defaults = {
  common: {
    test: '',
  },
};

type AppStoreDefaults = typeof defaults;

let appStore: ElectronStore<AppStoreDefaults>;

/**
 * createAppStore
 */
const createAppStore = (): ElectronStore<AppStoreDefaults> => {
  appStore = new Store<AppStoreDefaults>({
    name: 'app-store',
    cwd: isDev ? path.resolve(process.cwd(), 'temp') : app.getPath('userData'),
    defaults,
  });

  return appStore;
};

/**
 * getAppStore
 */
const getAppStore = () => appStore;

export { createAppStore, getAppStore };
