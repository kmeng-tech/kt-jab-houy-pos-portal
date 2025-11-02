import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import App from '../App';
import DashboardPage from '../pages/Dashboard';

// Define the routes configuration
const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'about',
        element: (
          <>
            <h1>Welcome About</h1>
          </>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <div>404 Not Found</div>,
  },
];

const router = createBrowserRouter(routes);

export default router;
