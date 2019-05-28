import { skills } from '../types/types';
import { services } from '../utils/access';

const skillsService = services.skillsService;

// get skills list
const getSkillsList = () => async (dispatch, getState) => {
  let response = {};
  try {
    response = await skillsService.getSkillsList();
  } catch (err) {
    console.log(err);
  }
  dispatch({
    type: skills.readAll,
    payload: response.data,
  });
};

export default {
  getSkillsList,
};
