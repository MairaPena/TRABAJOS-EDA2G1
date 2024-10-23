import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithEmail, loginWithGoogle } from './authActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

  const handleEmailLogin = (e) => {
    e.preventDefault();
    dispatch(loginWithEmail(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  // useMemo to disable buttons when the user is authenticated
  const disableButtons = useMemo(() => isAuthenticated, [isAuthenticated]);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={disableButtons || loading}>
          Login with Email
        </button>
      </form>
      <button onClick={handleGoogleLogin} disabled={disableButtons || loading}>
        Login with Google
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
