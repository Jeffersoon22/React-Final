import { reload } from "../reload";
import { auth } from "./firebase";

const USER_TOKEN = "User_Token";

export const userRegistration = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password).catch((error) => {
    alert(error);
  });
};

export const userLoginIn = (email, password) => {
  auth.signInWithEmailAndPassword(email, password).catch((error) => {
    alert(error);
  });
};

export const logout = () => {
  auth.signOut();
  removeUserToken();
  reload();
};

export const authenticationListener = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      saveUserToken(user.uid);
    } else {
      removeUserToken();
    }
  });
};

const saveUserToken = (token) => {
  localStorage.setItem(USER_TOKEN, token);
};

const removeUserToken = () => {
  localStorage.removeItem(USER_TOKEN);
};

export const getUserToken = () => {
  return localStorage.getItem(USER_TOKEN);
};
