import './App.css';

import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './routes/PrivateRoute';
import CreatePostView from './views/CreatePostView';
import ErrorPage from './views/ErrorPage';
import Feed from './views/Feed';
import Home from './views/Home';
import Login from './views/Login';
import PostView from './views/PostView';
import Register from './views/Register';

function App() {
  return (
    <>
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
          path="/feed/:id"
          element={
            <PrivateRoute>
              <PostView />
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
    </>
  );
}

export default App;
