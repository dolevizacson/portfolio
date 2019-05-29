export const loadingReducer = (state = { requestCount: 0 }, action) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;

  return {
    ...state,
    requestCount: state.requestCount + (requestState === 'REQUEST' ? 1 : -1),
    [requestName]: requestState === 'REQUEST',
  };
};
