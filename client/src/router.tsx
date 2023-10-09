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
    errorElement: <ErrorPage />,
  },
  {
    path: '/feed',
    element: <Feed />,
    errorElement: <ErrorPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
