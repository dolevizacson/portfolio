import { types } from '../utils/access';

const { errors } = types;

export const errorsReducer = (state = {}, action) => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  if (type === errors.resetErrors) {
    return {};
  }

  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]:
      requestState === 'FAILURE' ? payload.message || 'Server Error' : null,
  };
};
