import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './views/ErrorPage';
import Feed from './views/Feed';
import Login from './views/Login';
import Register from './views/Register';

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
