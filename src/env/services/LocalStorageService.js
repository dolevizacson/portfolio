class LocalStorageService {
  loadData(key) {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.log(`Data can't be load + ${err}`);
    }
  }
  saveData(key, state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      console.log(`State can't be saved + ${err}`);
    }
  }

  deleteData(key) {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.log(`Data can't be deleted + ${err}`);
    }
  }
}

export default new LocalStorageService();
