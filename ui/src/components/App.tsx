import AppHooks from '@/hooks/AppHooks';
import { AppRoutes } from '@/router';
import { FC } from 'react';

const App: FC = () => (
  <div>
    <AppHooks />
    <AppRoutes />
  </div>
);

export default App;
