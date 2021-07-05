import { FC } from 'react';

export interface IRouteSingle {
  path: string;
  access: 'public';
  component: FC;
}

export interface IRoutePaths {
  [routeName: string]: string;
}
