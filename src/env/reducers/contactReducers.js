import { types } from '../utils/access';

// types
const { contact } = types;

export const contactReducer = (state = false, action) => {
  switch (action.type) {
    case contact.createSuccess:
      return true;
    case contact.resetMessageSent:
      return action.payload;
    default:
      return false;
  }
};
