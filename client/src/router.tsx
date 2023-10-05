import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './ErrorPage';
import Feed from './Feed';
import Login from './Login';
import Register from './Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/feed',
    element: <Feed />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
