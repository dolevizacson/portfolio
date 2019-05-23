import { skills } from '../../../confing/types';
import skillsService from '../services/SkillsService';

// load skills list content to skills page
export const getSkillsListContent = () => async (dispatch, getState) => {
  let response = {};
  try {
    response = await skillsService.getSkillsList();
  } catch (err) {
    console.log(err);
  }
  dispatch({
    type: skills.skillsList,
    payload: response.data,
  });
};
