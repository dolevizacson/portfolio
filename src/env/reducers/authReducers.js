import { auth } from '../types/types';

export const authReducer = (state = false, action) => {
  switch (action.type) {
    case auth.loginSuccess || auth.loginSuccess || auth.isLoggedIn:
      return action.payload;
    default:
      return state;
  }
};
