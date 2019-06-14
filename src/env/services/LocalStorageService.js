import { errorHandlers } from '../utils/access';

class LocalStorageService {
  loadData(key) {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      errorHandlers.localStorageErrorHandler(err);
    }
  }
  saveData(key, state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      errorHandlers.localStorageErrorHandler(err);
    }
  }

  deleteData(key) {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      errorHandlers.localStorageErrorHandler(err);
    }
  }
}

export default new LocalStorageService();
