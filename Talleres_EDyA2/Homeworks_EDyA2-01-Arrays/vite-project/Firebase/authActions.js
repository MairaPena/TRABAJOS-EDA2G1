import { auth } from './firebase/config';
import { signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';
import { loginStart, loginSuccess, loginFailure, logoutSuccess } from './authSlice';
import { googleProvider } from './firebase/config';

export const loginWithEmail = (email, password) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    dispatch(loginSuccess({ email: user.email }));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const loginWithGoogle = () => async (dispatch) => {
  dispatch(loginStart());
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    dispatch(loginSuccess({ email: user.email }));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(logoutSuccess());
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
