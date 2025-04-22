import { Navigate, Outlet } from 'react-router-dom';
import { FC, ReactElement } from 'react';

const PrivateRoute: FC = (): ReactElement => {
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? <Outlet /> : <Navigate to="/entrar" />;
};

export default PrivateRoute;
