import GlobalStyle from '../style/GlobalStyle';
import MainTheme from '../style/MainTheme';

export { default as types } from '../types/types';
export { default as classes } from '../classes/classes';
export { default as errors } from '../errors/errors';
export { default as functions } from '../functions/functions';
export { default as errorHandlers } from '../errorHandlers/errorHandlers';
export { default as constants } from '../constants/constants';
export { default as portfolioApiServer } from '../servers/portfolioApiServer';
export { default as services } from '../services/services';
export { default as actions } from '../actions/actions';

// global components
export { default as UiHeader } from '../../components/UiHeader/UiHeader';
export { default as UiLoading } from '../../components/UiLoading/UiLoading';
export { default as ProtectedRoute } from '../../components/ProtectedRoute/ProtectedRoute';
export { default as ErrorPage } from '../../components/ErrorPage/ErrorPage';
export { default as UiRequstError } from '../../components/UiRequestError/UiRequestError';
export { default as UiRequest } from '../../components/UiRequest/UiRequest';
export { default as BackButton } from '../../components/BackButton/BackButton';

export const style = {
  GlobalStyle,
  MainTheme,
};
