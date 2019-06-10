import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { throttle } from 'lodash';
import { localStorage } from './env/utils/access';
import reducers from './env/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState = {}) => {
  initialState = localStorage.loadState();
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
  store.subscribe(
    throttle(() => {
      localStorage.saveState(store.getState());
    }, 3000)
  );
  return store;
};
