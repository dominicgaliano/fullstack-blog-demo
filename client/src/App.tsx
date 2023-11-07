import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { loadUser } from './actions/authActions';
import { useAppDispatch } from './app/hooks';
import SpinLoader from './components/SpinLoader';
import PrivateRoute from './routes/PrivateRoute';
const CreatePostView = lazy(() => import('./views/CreatePostView'));
const ErrorPageView = lazy(() => import('./views/ErrorPageView'));
const FeedView = lazy(() => import('./views/FeedView'));
const HomeView = lazy(() => import('./views/HomeView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route
            path="/feed"
            element={
              <PrivateRoute>
                <FeedView />
              </PrivateRoute>
            }
          />
          <Route
            path="/feed/new"
            element={
              <PrivateRoute>
                <CreatePostView />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<ErrorPageView />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
