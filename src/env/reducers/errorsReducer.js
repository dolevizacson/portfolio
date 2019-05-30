export const errorsReducer = (state = { errorCount: 0 }, action) => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;

  return {
    ...state,
    errorCount:
      state.errorCount +
      (requestState === 'FAILURE' ? 1 : state.errorCount > 0 ? -1 : 0),
    [requestName]:
      requestState === 'FAILURE' ? payload.message || 'Server Error' : '',
  };
};
