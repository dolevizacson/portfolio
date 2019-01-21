import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './services/appContet/reducers';

export default (initialState = {}) => {
  return createStore(reducers, applyMiddleware(thunk));
};
