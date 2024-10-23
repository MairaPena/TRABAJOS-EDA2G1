import { useContext } from 'react';
import AuthContext from './authContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <p>Welcome, {user}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
