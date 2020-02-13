export default {
  getActiveItems: (types, service) => async (dispatch, getState) => {
    dispatch({ type: types.readAllActiveRequest });
    let response;
    try {
      response = await service.getActiveItems();
      dispatch({
        type: types.readAllActiveSuccess,
        payload: response,
      });
    } catch (err) {
      dispatch({ type: types.readAllActiveFail, payload: err });
    }
  },

  getItems: (types, service) => async (dispatch, getState) => {
    dispatch({ type: types.readAllRequest });
    let response;
    try {
      response = await service.getItems();
      dispatch({
        type: types.readAllSuccess,
        payload: response,
      });
    } catch (err) {
      dispatch({ type: types.readAllFail, payload: err });
    }
  },

  getItem: (id, types, service) => async (dispatch, getState) => {
    dispatch({ type: types.readRequest });
    let response;
    try {
      response = await service.getItem(id);
      dispatch({ type: types.readSuccess, payload: response });
    } catch (err) {
      dispatch({ type: types.readFail, payload: err });
    }
  },

  postItem: (item, ownProps, types, service, route, withID) => async (
    dispatch,
    getState
  ) => {
    dispatch({ type: types.createRequest });
    let response;
    try {
      response = await service.postItem(item);
      dispatch({
        type: types.createSuccess,
        payload: response,
      });
      withID
        ? ownProps.history.push(`${route}/${response._id}`)
        : ownProps.history.push(`${route}`);
    } catch (err) {
      dispatch({ type: types.createFail, payload: err });
    }
  },

  updateItem: (id, item, ownProps, types, service, route, withID) => async (
    dispatch,
    getState
  ) => {
    dispatch({ type: types.updateRequest });
    let response;
    try {
      response = await service.updateItem(id, item);
      dispatch({
        type: types.updateSuccess,
        payload: response,
      });
      withID
        ? ownProps.history.push(`${route}/${response._id}`)
        : ownProps.history.push(`${route}`);
    } catch (err) {
      dispatch({ type: types.updateFail, payload: err });
    }
  },

  toggleItem: (id, types, service) => async (dispatch, getState) => {
    dispatch({ type: types.toggleRequest });
    let response;
    try {
      response = await service.toggleItem(id);
      dispatch({
        type: types.toggleSuccess,
        payload: response,
      });
    } catch (err) {
      dispatch({ type: types.toggleFail, payload: err });
    }
  },

  deleteItem: (id, ownProps, type, service, route) => async (
    dispatch,
    getState
  ) => {
    dispatch({ type: type.deleteRequest });
    let response;
    try {
      response = await service.deleteItem(id);
      dispatch({
        type: type.deleteSuccess,
        payload: response,
      });
      ownProps.history.push(route);
    } catch (err) {
      dispatch({ type: type.deleteFail, payload: err });
    }
  },
};
