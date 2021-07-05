import { ipcRenderer } from '@/api/ipc';
import { routes } from '@/router/routes';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

/**
 * Listen Main Process IPC channels
 */
export const useMainProcessListeners = () => {
  const history = useHistory();

  useEffect(() => {
    ipcRenderer.on('push-route', (e, { name }: { name: keyof typeof routes }) => {
      const path = routes[name]?.path;

      if (path) {
        history.push(path);
      }
    });

    // Remove listeners
    return () => {
      ['push-route'].map((channel) => ipcRenderer.removeAllListeners(channel));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
