import { FC, ReactNode } from 'react';

type PrivateRouteProps = {
  children?: ReactNode;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const allowEntry = false;

  return allowEntry ? <>{children}</> : <p>page access restricted</p>;
};

export default PrivateRoute;
