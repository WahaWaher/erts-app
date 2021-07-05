import { fetchAppStore, writeAppStore } from '@/api/ipc';

export const electronStorage = {
  async getItem(key: string) {
    if (key === 'persist:common') {
      const res = await fetchAppStore();

      return res.common;
    }

    return;
  },
  async setItem(key: string, data: any) {
    if (key === 'persist:common') {
      return writeAppStore('common', data);
    }

    return;
  },
  async removeItem(key: string) {},
};
