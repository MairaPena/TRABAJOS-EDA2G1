import { useDispatch, useSelector } from 'react-redux';
import { logout } from './authActions';

const Logout = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Logout;
