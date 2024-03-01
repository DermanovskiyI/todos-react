import Account from '@/pages/account/Account';
import { RouteObject } from 'react-router-dom';

export const privateRoutes: RouteObject[] = [
  {
    path: '/account',
    element: <Account />,
  },
];
