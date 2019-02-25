import { serverHome } from '../../../../services/api/portfolioServer';

// load about content to home page
export const loadAboutContent = () => async (dispatch, getState) => {
  let response = {};
  try {
    response = await serverHome.get('/about');
  } catch (err) {
    console.log(err);
  }

  dispatch({
    type: 'LOAD_ABOUT_CONTENT',
    payload: response.data,
  });
};
// load moto to home page
export const loadMotoContent = () => async (dispatch, getState) => {
  let response = {};
  try {
    response = await serverHome.get('/moto');
  } catch (err) {
    console.log(err);
  }
  dispatch({
    type: 'LOAD_MOTO_CONTENT',
    payload: response.data,
  });
};
