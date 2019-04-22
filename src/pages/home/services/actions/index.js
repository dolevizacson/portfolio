import { serverHome } from '../../../../services/api/portfolioServer';
import { home } from '../../../../confing/types';

// load about content to home page
export const getAboutContent = () => async (dispatch, getState) => {
  let response = {};
  try {
    response = await serverHome.get('/about');
  } catch (err) {
    console.log(err);
  }

  dispatch({
    type: home.about,
    payload: response.data,
  });
};
// load moto to home page
export const getMotoContent = () => async (dispatch, getState) => {
  let response = {};
  try {
    response = await serverHome.get('/moto');
  } catch (err) {
    console.log(err);
  }
  dispatch({
    type: home.moto,
    payload: response.data,
  });
};

export const getCurrentlyWorkingContent = () => async (dispatch, getState) => {
  let response = {};
  try {
    response = await serverHome.get('/workingon');
  } catch (err) {
    console.log(err);
  }
  dispatch({
    type: home.currentlyWorking,
    payload: response.data,
  });
};
