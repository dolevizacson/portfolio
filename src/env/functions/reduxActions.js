const defaultOptions = { route: null, withID: false };

export const getActiveItems =
  (types, service) => async (dispatch, getState) => {
    const state = getState();

    if (state[types.stateName] && state[types.stateName].length === 0) {
      dispatch({ type: types.readAllActiveRequest });
    }
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
  };

export const getItems = (types, service) => async (dispatch, getState) => {
  const state = getState();

  if (state[types.stateName] && state[types.stateName].length === 0) {
    dispatch({ type: types.readAllRequest });
  }
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
};

export const getItem = (types, service, id) => async (dispatch, getState) => {
  dispatch({ type: types.readRequest });
  let response;
  try {
    response = await service.getItem(id);
    dispatch({ type: types.readSuccess, payload: response });
  } catch (err) {
    dispatch({ type: types.readFail, payload: err });
  }
};

export const getActiveItem =
  (types, service, id) => async (dispatch, getState) => {
    dispatch({ type: types.readActiveRequest });
    let response;
    try {
      response = await service.getActiveItem(id);
      dispatch({ type: types.readActiveSuccess, payload: response });
    } catch (err) {
      dispatch({ type: types.readActiveFail, payload: err });
    }
  };

export const postItem =
  (types, service, item, ownProps, options = { ...defaultOptions }) =>
  async (dispatch, getState) => {
    dispatch({ type: types.createRequest });
    let response;
    try {
      response = await service.postItem(item);
      dispatch({
        type: types.createSuccess,
        payload: response,
      });
      if (options.route) {
        ownProps.history.push(
          `${options.route}${options.withID ? `/${response._id}` : ''}`,
          response
        );
      }
    } catch (err) {
      dispatch({ type: types.createFail, payload: err });
    }
  };

export const updateItem =
  (types, service, id, item, ownProps, options = { ...defaultOptions }) =>
  async (dispatch, getState) => {
    dispatch({ type: types.updateRequest });
    let response;
    try {
      response = await service.updateItem(id, item);
      dispatch({
        type: types.updateSuccess,
        payload: response,
      });
      if (options.route) {
        ownProps.history.push(
          `${options.route}${options.withID ? `/${response._id}` : ''}`,
          response
        );
      }
    } catch (err) {
      dispatch({ type: types.updateFail, payload: err });
    }
  };

export const toggleItem =
  (types, service, id) => async (dispatch, getState) => {
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
  };

export const deleteItem =
  (type, service, id, ownProps, options = { ...defaultOptions }) =>
  async (dispatch, getState) => {
    dispatch({ type: type.deleteRequest });
    let response;
    try {
      response = await service.deleteItem(id);
      dispatch({
        type: type.deleteSuccess,
        payload: response,
      });
      if (options.route) {
        ownProps.history.push(
          `${options.route}${options.withID ? `/${response._id}` : ''}`
        );
      }
    } catch (err) {
      dispatch({ type: type.deleteFail, payload: err });
    }
  };
