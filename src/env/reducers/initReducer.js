import { types } from '../utils/access';

// types
const { init } = types;

export const initReducer = (state = false, action) => {
  switch (action.type) {
    case init.isLoggedIn:
      return true;
    default:
      return state;
  }
};
