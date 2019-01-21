import content from '../../../confings/appContent';

const home = content.home;

export const loadAboutContentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_CONTENT_ABOUT':
      return {
        result: action.payload,
      };
    default:
      return { aboutContent: home.about };
  }
};

export const loadMotoContentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_MOTO_ABOUT':
      return { result: action.payload };
    default:
      return { motoContent: home.moto };
  }
};
