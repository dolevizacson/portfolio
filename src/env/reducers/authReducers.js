import { auth } from '../types/types';

export const authReducer = (state = false, action) => {
  switch (action.type) {
    case auth.loginSuccess:
    case auth.logoutSuccess:
    case auth.isLoggedInSuccess:
      return action.payload;
    default:
      return state;
  }
};
