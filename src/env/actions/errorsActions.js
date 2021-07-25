import { types } from '../utils/access';

// types
const { errors: errorsTypes } = types;

export const resetErrors = () => (dispatch, getState) => {
  dispatch({ type: errorsTypes.resetErrors });
};
