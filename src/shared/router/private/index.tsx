import Account from '@/pages/account/Account';
import PersonalAccLayout from '@/shared/layouts/PersonalAccLayout';
import { RouteObject } from 'react-router-dom';

export const privateRoutes: RouteObject[] = [
  {
    path: '/account',
    element: <PersonalAccLayout />,
    children: [
      {
        path: '/account',
        element: <Account />,
      },
    ],
  },
];
