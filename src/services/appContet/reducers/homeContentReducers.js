import content from '../../../confings/appContent';

const home = content.home;

export const loadHomeContentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_ABOUT_CONTENT':
      return { ...state, aboutContent: action.payload };
    default:
      return { homeContent: home };
  }
};
