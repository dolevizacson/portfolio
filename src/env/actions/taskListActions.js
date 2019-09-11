import { taskList } from '../types/types';
import { services, constants } from '../utils/access';

// constants
const { projectsRoute } = constants;

// services
const { taskListService } = services;

// get task list
const getTaskList = () => async (dispatch, getState) => {
  dispatch({ type: taskList.readAllRequest });
  let response;
  try {
    response = await taskListService.getTaskList();
    dispatch({
      type: taskList.readAllSuccess,
      payload: response,
    });
  } catch (err) {
    dispatch({ type: taskList.readAllFail, payload: err });
  }
};

// post task
const postTask = (task, ownProps) => async (dispatch, getState) => {
  dispatch({ type: taskList.createRequest });
  let response;
  try {
    response = await taskListService.postTask(task);
    dispatch({
      type: taskList.createSuccess,
      payload: response,
    });
    ownProps.history.push(projectsRoute, { task: response });
  } catch (err) {
    dispatch({ type: taskList.createFail, payload: err });
  }
};

// put task
const updateTask = (id, task, ownProps) => async (dispatch, getState) => {
  dispatch({ type: taskList.updateRequest });
  let response;
  try {
    response = await taskListService.updateTask(id, task);
    dispatch({
      type: taskList.updateSuccess,
      payload: response,
    });
    ownProps.history.push(projectsRoute, ownProps.location.state);
  } catch (err) {
    dispatch({ type: taskList.updateFail, payload: err });
  }
};

// patch task
const toggleTask = id => async (dispatch, getState) => {
  dispatch({ type: taskList.toggleRequest });
  let response;
  try {
    response = await taskListService.toggleTask(id);
    dispatch({
      type: taskList.toggleSuccess,
      payload: response,
    });
  } catch (err) {
    dispatch({ type: taskList.toggleFail, payload: err });
  }
};

// delete task
const deleteTask = id => async (dispatch, getState) => {
  dispatch({ type: taskList.deleteRequest });
  let response;
  try {
    response = await taskListService.deleteTask(id);
    dispatch({
      type: taskList.deleteSuccess,
      payload: response,
    });
  } catch (err) {
    dispatch({ type: taskList.deleteFail, payload: err });
  }
};

export default {
  getTaskList,
  postTask,
  updateTask,
  toggleTask,
  deleteTask,
};
