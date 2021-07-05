import { HashRouter, Redirect, Switch } from 'react-router-dom';
import RouteSpecial from '@/router/components/RouteSpecial';
import { createRouteNamesObject } from '@/utils';
import routes, { RouterNamesSet } from '@/router/routes';
import { FC } from 'react';

export const routeNames = createRouteNamesObject(routes);

export const AppRouter: FC = (props) => <HashRouter {...props} />;

export const AppRoutes = () => {
  const routerNames = Object.keys(routes) as Array<RouterNamesSet>;

  return (
    <Switch>
      {routerNames.map((key) => {
        return (
          /* @ts-ignore */
          <RouteSpecial {...routes[key]} key={key} />
        );
      })}
      <Redirect to={routes.home.path} />
    </Switch>
  );
};
