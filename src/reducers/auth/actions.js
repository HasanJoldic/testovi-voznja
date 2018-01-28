import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_LOGIN_LOGOUT
} from "./index.js";

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({
      type: AUTH_LOGIN,
      username: username,
      password: password
    });
    const isLoggedIn = await _asyncLogin();
    dispatch({
      type: AUTH_LOGIN_SUCCESS,
      accessToken: "ACCESS_TOKEN"
    });
  };
};

const _asyncLogin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};