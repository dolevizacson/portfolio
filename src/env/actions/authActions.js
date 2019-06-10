import { auth } from '../types/types';
import { services } from '../utils/access';

const authService = services.authService;

// send login request to server
const login = (username, password) => async (dispatch, getState) => {
  dispatch({ type: auth.loginRequest });
  let response;
  try {
    response = await authService.login(username, password);
    dispatch({
      type: auth.loginSuccess,
      payload: response,
    });
  } catch (err) {
    dispatch({ type: auth.loginFail, payload: err });
  }
};

const logout = () => async (dispatch, getState) => {
  dispatch({ type: auth.logoutRequest });
  let response;
  try {
    response = await authService.logout();
    dispatch({
      type: auth.logoutSuccess,
      payload: response,
    });
  } catch (err) {
    dispatch({ type: auth.logoutFail, payload: err });
  }
};

const isLoggedIn = () => async (dispatch, getState) => {
  dispatch({ type: auth.isLoggedInRequest });
  let response;
  try {
    response = await authService.isLoggedIn();
    dispatch({
      type: auth.isLoggedInSuccess,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: auth.isLoggedInFail,
      payload: err,
    });
  }
};

export default {
  login,
  logout,
  isLoggedIn,
};
