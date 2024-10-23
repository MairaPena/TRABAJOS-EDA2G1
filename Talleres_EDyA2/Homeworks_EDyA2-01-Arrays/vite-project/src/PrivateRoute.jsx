import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './authContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, lastVisited, setLastVisited } = useContext(AuthContext);

  if (!isAuthenticated) {
    setLastVisited(window.location.pathname); // Record last visited page
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
