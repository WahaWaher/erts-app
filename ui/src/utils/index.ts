import { RoutesSet } from '@/router/routes';
import { IRoutePaths } from '@/router/types';

/**
 * Create object of noute names
 */
export const createRouteNamesObject = (routes: RoutesSet): IRoutePaths =>
  Object.keys(routes).reduce(
    (paths, key) => ({
      ...paths,
      [key]: routes[key as keyof RoutesSet].path,
    }),
    {} as IRoutePaths
  );
