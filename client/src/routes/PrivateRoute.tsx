import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';

type PrivateRouteProps = {
  children?: ReactNode;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { loading, isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <>
      {loading === false &&
        (isAuthenticated ? <>{children}</> : <Navigate to="/login" />)}
    </>
  );
};

export default PrivateRoute;
