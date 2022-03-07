//general utility action types
export const REMOVE = "REMOVE";
//helper function
export const modify = (actionType, dataType, state, ids) => {
  switch (actionType) {
    case REMOVE: {
      if (dataType === Object) {
        const objectCopy = { ...state };
        ids.forEach((id) => {
          delete objectCopy[id];
        });
        return objectCopy;
      }
      if (dataType === Array) {
        return [...state].filter((stateId) => !ids.includes(stateId));
      }
      return state;
    }
    default:
      return state;
  }
};