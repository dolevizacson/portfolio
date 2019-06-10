import { constants } from '../utils/access';

export default {
  loadState() {
    try {
      const serializedState = localStorage.getItem(constants.localStorageKey);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  },
  saveState(state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(constants.localStorageKey, serializedState);
    } catch {
      console.log("State can't be saved");
    }
  },
};
