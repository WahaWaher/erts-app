import { app } from 'electron';
import { getMainWindow } from '@/windows/mainWindow';

const appLock = async (whenReady = () => {}) => {
  const gotTheLock = app.requestSingleInstanceLock();

  if (!gotTheLock) {
    app.quit();
  } else {
    app.on('second-instance', () => {
      const mainWindow = getMainWindow();

      if (mainWindow) {
        if (mainWindow.isMinimized()) {
          mainWindow.restore();
        }

        mainWindow.focus();
      }
    });

    await app.whenReady();

    whenReady();
  }
};

export { appLock };
