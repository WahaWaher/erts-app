import { nativeImage, Tray, Menu } from 'electron';
import { pushRoute, toggleWindow } from '@/windows/actions';
import { getAssetsPath } from '@/utils/pathUtils';
import { pkg } from '@/utils/pkgUtils';

type MainTrayOptions = {
  mainWindow: Electron.BrowserWindow;
};

let mainTray = null;

const createMainTray = ({ mainWindow }: MainTrayOptions) => {
  const favIcon = getAssetsPath('favicon.ico');
  const nImage = nativeImage.createFromPath(favIcon);

  mainTray = new Tray(nImage);

  mainTray.setContextMenu(
    Menu.buildFromTemplate([
      {
        label: 'Show/Hide',
        click: () => toggleWindow(mainWindow),
      },
      { type: 'separator' },
      {
        label: 'Home',
        click: () => pushRoute(mainWindow, 'home'),
      },
      {
        label: 'About',
        click: () => pushRoute(mainWindow, 'about'),
      },
      { type: 'separator' },
      { label: 'Quit', role: 'quit' },
    ])
  );

  mainTray.setToolTip(pkg?.appTitle || '');
  mainTray.on('click', () => toggleWindow(mainWindow));

  return mainTray;
};

export { createMainTray };
