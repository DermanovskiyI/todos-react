import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { privateRoutes } from './private';
import { publicRoutes } from './public';

export const routes: RouteObject[] = [...publicRoutes, ...privateRoutes];
const router = createBrowserRouter(routes);

export default router;
