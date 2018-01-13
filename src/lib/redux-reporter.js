let reporter = store => next => action => {
  try {
    let result = next(action);
    return result;
  } catch(error) {
    error.action = action;
    console.error('Error!: ', error);
    return error;
  }
};

export default reporter;
