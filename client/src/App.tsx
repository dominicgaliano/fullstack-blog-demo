import './App.css';

import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { loadUser } from './actions/authActions';
import { useAppDispatch } from './app/hooks';
import SpinLoader from './components/SpinLoader';
import PrivateRoute from './routes/PrivateRoute';
const CreatePostView = lazy(() => import('./views/CreatePostView'));
const ErrorPage = lazy(() => import('./views/ErrorPage'));
const Feed = lazy(() => import('./views/Feed'));
const Home = lazy(() => import('./views/Home'));
const Login = lazy(() => import('./views/Login'));
const Register = lazy(() => import('./views/Register'));

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/feed"
            element={
              <PrivateRoute>
                <Feed />
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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
