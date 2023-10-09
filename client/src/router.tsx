import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './views/ErrorPage';
import Feed from './views/Feed';
import Login from './views/Login';

const router = createBrowserRouter([
  {
    path: '/',
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
