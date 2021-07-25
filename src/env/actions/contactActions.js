import { services, types } from '../utils/access';

// types
const { contact: contactTypes } = types;

// services
const { contactService } = services;

export const postMail = (mail, ownProps) => async (dispatch, getState) => {
  dispatch({ type: contactTypes.createRequest });
  let response;
  try {
    response = await contactService.postItem(mail);
    dispatch({
      type: contactTypes.createSuccess,
      payload: response,
    });
  } catch (err) {
    dispatch({ type: contactTypes.createFail, payload: err });
  }
};

export const resetMessageSent = () => (dispatch, getState) => {
  dispatch({ type: contactTypes.resetMessageSent, payload: false });
};
