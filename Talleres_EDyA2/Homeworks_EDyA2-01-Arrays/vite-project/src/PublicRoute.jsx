import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './authContext';

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default PublicRoute;
