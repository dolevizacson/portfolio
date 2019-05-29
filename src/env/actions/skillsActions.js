import { skills } from '../types/types';
import { services } from '../utils/access';

const skillsService = services.skillsService;

// get skills list
const getSkillsList = () => async (dispatch, getState) => {
  dispatch({ type: skills.readAllRequest });
  let response = {};
  try {
    response = await skillsService.getSkillsList();
    dispatch({
      type: skills.readAllSuccess,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: skills.readAllFail,
      payload: err,
    });
  }
};

export default {
  getSkillsList,
};
