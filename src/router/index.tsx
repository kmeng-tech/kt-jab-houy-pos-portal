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
        index: true, // This marks the route as the default child route for the parent path ('/')
        element: <DashboardPage />,
      },
      {
        path: 'about', // Note: no leading slash for child routes
        element: (
          <>
            <h1>Welcome About</h1>
          </>
        ),
      },
      // You can add more routes here
    ],
  },
  {
    path: '*',
    element: <div>404 Not Found</div>,
  },
];

const router = createBrowserRouter(routes);

export default router;
