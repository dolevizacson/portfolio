import { auth } from '../types/types';
import { services } from '../utils/access';

const authService = services.authService;

// send login request to server
const login = (username, password) => async (dispatch, getState) => {
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

const logout = () => async (dispatch, getState) => {
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

const isLoggedIn = () => async (dispatch, getState) => {
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

export default {
  login,
  logout,
  isLoggedIn,
};
