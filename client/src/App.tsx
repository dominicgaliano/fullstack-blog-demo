import './App.css';

import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './routes/PrivateRoute';
import ErrorPage from './views/ErrorPage';
import Feed from './views/Feed';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed">
          <PrivateRoute>
            <Feed />
          </PrivateRoute>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
