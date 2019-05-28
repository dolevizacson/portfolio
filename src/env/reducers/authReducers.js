import { auth } from '../types/types';

export const authReducer = (state = false, action) => {
  switch (action.type) {
    case auth.login || auth.logout || auth.isLoggedIn:
      return action.payload;
    default:
      return state;
  }
};
