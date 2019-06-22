import { skills } from '../types/types';
import { services, constants } from '../utils/access';

// constants
const { skillsRoute } = constants;

// services
const { skillsService } = services;

// get skills lists
const getSkillsLists = () => async (dispatch, getState) => {
  dispatch({ type: skills.readAllRequest });
  let response;
  try {
    response = await skillsService.getSkillsLists();
    dispatch({
      type: skills.readAllSuccess,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: skills.readAllFail,
      payload: err,
    });
  }
};

// post skills list
const postSkillsList = (skillsList, ownProps) => async (dispatch, getState) => {
  dispatch({ type: skills.createRequest });
  let response;
  try {
    response = await skillsService.postSkillsList(skillsList);
    dispatch({
      type: skills.createSuccess,
      payload: response,
    });
    ownProps.history.push(skillsRoute, ownProps.location.state);
  } catch (err) {
    dispatch({
      type: skills.createFail,
      payload: err,
    });
  }
};

// put skills list
const updateSkillsList = (id, skillsList, ownProps) => async (
  dispatch,
  getState
) => {
  dispatch({ type: skills.updateRequest });
  let response;
  try {
    response = await skillsService.updateSkillsList(id, skillsList);
    dispatch({ type: skills.updateSuccess, payload: response });
    ownProps.history.push(skillsRoute, ownProps.location.state);
  } catch (err) {
    dispatch({ type: skills.updateFail, payload: err });
  }
};

// delete skills list
const deleteSkillsList = id => async (dispatch, getState) => {
  dispatch({ type: skills.deleteRequest });
  let response;
  try {
    response = await skillsService.deleteSkillsList(id);
    dispatch({ type: skills.deleteSuccess, payload: response });
  } catch (err) {
    dispatch({ type: skills.deleteFail, payload: err });
  }
};

export default {
  getSkillsLists,
  postSkillsList,
  updateSkillsList,
  deleteSkillsList,
};
