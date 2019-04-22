import { home } from '../../confing/types';

export const getAboutContentReducer = (state = {}, action) => {
  switch (action.type) {
    case home.about:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export const getMotoContentReducer = (state = {}, action) => {
  switch (action.type) {
    case home.moto:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export const getCurentlyWorkingContentReducer = (state = {}, action) => {
  switch (action.type) {
    case home.currentlyWorking:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};
