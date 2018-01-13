//Allows you to pass functions as actions//

export default store => next => action => {
  return typeof action === 'function'
  ? action(store.dispatch, store.getState)
  : next(action);
};
