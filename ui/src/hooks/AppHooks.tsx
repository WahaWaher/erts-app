import { useMainProcessListeners } from '@/hooks';
import { FC } from 'react';

const AppHooks: FC = () => {
  useMainProcessListeners();

  return null;
};

export default AppHooks;
