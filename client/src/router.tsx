import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
