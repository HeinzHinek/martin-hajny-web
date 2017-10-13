const hasProperty = Object.prototype.hasOwnProperty;

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (hasProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }

    return state;
  };
}

export default createReducer;
