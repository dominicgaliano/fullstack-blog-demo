import { FC, ReactNode } from 'react';

type PrivateRouteProps = {
  children?: ReactNode;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  // TODO: add auth verification based on redux state

  const allowEntry = false;

  return allowEntry ? <>{children}</> : <p>page access restricted</p>;
};

export default PrivateRoute;
