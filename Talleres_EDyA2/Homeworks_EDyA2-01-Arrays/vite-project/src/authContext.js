import { createContext, useReducer } from 'react';

// Create Context
const AuthContext = createContext();

// Reducer function to manage login/logout
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.username,
        lastVisited: action.payload.lastVisited || '/',
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        lastVisited: '/',
      };
    case 'SET_LAST_VISITED':
      return {
        ...state,
        lastVisited: action.payload,
      };
    default:
      return state;
  }
};

// Provider component to wrap the app
export const AuthProvider = ({ children }) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
    lastVisited: '/',
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (username, lastVisited) => {
    dispatch({ type: 'LOGIN', payload: { username, lastVisited } });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const setLastVisited = (path) => {
    dispatch({ type: 'SET_LAST_VISITED', payload: path });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, setLastVisited }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
