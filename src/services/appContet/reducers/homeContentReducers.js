import { home } from '../../../confings/types';

export const loadAboutContentReducer = (state = {}, action) => {
  switch (action.type) {
    case home.about:
      return { ...state, aboutContent: action.payload };
    default:
      return state;
  }
};

export const loadMotoContentReducer = (state = {}, action) => {
  switch (action.type) {
    case home.moto:
      return { ...state, motoContent: action.payload };
    default:
      return state;
  }
};

export const loadCurentlyWorkingContentReducer = (state = {}, action) => {
  switch (action.type) {
    case home.currentlyWorking:
      return { ...state, currentlyWorkingContent: action.payload };
    default:
      return state;
  }
};
