import { Outlet } from 'react-router-dom';

function AppView() {
  return (
    <>
      <nav>THIS IS A NAV</nav>
      <Outlet />
    </>
  );
}

export default AppView;
