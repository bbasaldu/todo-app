//general utility action types
export const REMOVE = "REMOVE";
export const EDIT = "EDIT"
//helper function for general operations on normalized data
export const modify = (actionType, dataType=null, state, ids, fieldName="", newData=null) => {
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
    case EDIT: {
      const objectCopy = {...state}
      ids.forEach(id => {
        objectCopy[id][fieldName] = newData
      })
      return objectCopy
    }
    default:
      return state;
  }
};