import { RouteObject } from 'react-router-dom';
import Home from '@/pages/home/Home';
import TodoList from '@/pages/todos/TodoList';
import DefaultLayout from '@/shared/layouts/DefaultLayout';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/todo',
        element: <TodoList />,
      },
    ],
  },
];
