import { FC, ReactNode } from 'react';

import { useAppSelector } from '../app/hooks';

type PrivateRouteProps = {
  children?: ReactNode;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { loading, isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <>
      {loading === false &&
        (isAuthenticated ? <>{children}</> : <p>page access restricted</p>)}
    </>
  );
};

export default PrivateRoute;
