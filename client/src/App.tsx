import './App.css';

import { Route, Routes } from 'react-router-dom';

import ErrorPage from './views/ErrorPage';
import Feed from './views/Feed';
import Login from './views/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
