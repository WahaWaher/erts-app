import About from '@/pages/About';
import Home from '@/pages/Home';

export const routes = {
  home: {
    path: '/',
    access: 'public',
    component: Home,
  },
  about: {
    path: '/about',
    access: 'public',
    component: About,
  },
};

export type RoutesSet = typeof routes;
export type RouterNamesSet = keyof typeof routes;

export default routes;
