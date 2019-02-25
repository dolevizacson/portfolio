export const loadAboutContentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_ABOUT_CONTENT':
      return { ...state, aboutContent: action.payload };
    default:
      return state;
  }
};

export const loadMotoContentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_MOTO_CONTENT':
      return { ...state, motoContent: action.payload };
    default:
      return state;
  }
};
