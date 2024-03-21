import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AppDispatch } from "..";
import { auth } from "../firebaseConfig";
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from "../slice";

export const login =
  (email: string, password: string): any =>
  async (dispatch: AppDispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        loginSuccess({
          displayName: userCredential.user.displayName,
          email: userCredential.user.email,
          emailVerified: userCredential.user.emailVerified,
          phoneNumber: userCredential.user.phoneNumber,
          photoURL: userCredential.user.photoURL,
          uid: userCredential.user.uid,
        })
      );
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };

export const logout = (): any => async (dispatch: AppDispatch) => {
  try {
    await signOut(auth);
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure(error));
  }
};

export const createUser =
  (email: string, password: string): any =>
  async (dispatch: AppDispatch) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        loginSuccess({
          displayName: userCredential.user.displayName,
          email: userCredential.user.email,
          emailVerified: userCredential.user.emailVerified,
          phoneNumber: userCredential.user.phoneNumber,
          photoURL: userCredential.user.photoURL,
          uid: userCredential.user.uid,
        })
      );
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
