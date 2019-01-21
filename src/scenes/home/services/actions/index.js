// load about content to home page
export const loadAboutContent = () => async (dispatch, getState) => {
  // do async stuff with await
  dispatch({
    type: 'LOAD_ABOUT_CONTENT',
    payload: 'about content',
  });
};
// load moto to home page
export const loadMotoContent = () => async (dispatch, getState) => {
  // do async stuff with await
  dispatch({
    type: 'LOAD_MOTO_CONTENT',
    payload: 'moto',
  });
};
