import { auth } from '../confing/types';
import authService from '../services/AuthService';

// send login request to server
export const login = (username, password) => async (dispatch, getState) => {
  let response;
  try {
    response = await authService.login(username, password);
  } catch (err) {
    console.log(err);
  }
  dispatch({
    type: auth.login,
    payload: response,
  });
};

export const logout = () => async (dispatch, getState) => {
  let response;
  try {
    response = await authService.logout();
  } catch (err) {
    console.log(err);
  }
  dispatch({
    type: auth.logout,
    payload: response,
  });
};

export const isLoggedIn = () => async (dispatch, getState) => {
  let response;
  try {
    response = await authService.isLoggedIn();
  } catch (err) {
    console.log(err);
  }
  dispatch({
    type: auth.logout,
    payload: response,
  });
};
