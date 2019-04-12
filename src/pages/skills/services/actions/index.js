import { serverSkills } from '../../../../services/api/portfolioServer';
import { skills } from '../../../../confing/types';

// load skills list content to skills page
export const loadSkillsListContent = () => async (dispatch, getState) => {
  let response = {};
  try {
    response = await serverSkills.get('/skillslist');
  } catch (err) {
    console.log(err);
  }
  dispatch({
    type: skills.skillsList,
    payload: response.data,
  });
};
