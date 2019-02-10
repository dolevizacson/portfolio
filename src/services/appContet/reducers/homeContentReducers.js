import content from '../../../confings/appContent';

const home = content.home;

export const loadAboutContentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_ABOUT_CONTENT':
      return { ...state, aboutContent: action.payload };
    default:
      return { aboutContent: home.about };
  }
};

export const loadMotoContentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_MOTO_CONTENT':
      return { ...state, motoContent: action.payload };
    default:
      return { motoContent: home.moto };
  }
};

export const loadTaskListContentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_TASK_LIST_CONTENT':
      return { ...state, motoContent: action.payload };
    default:
      return { taskListContent: home.workingOn };
  }
};
