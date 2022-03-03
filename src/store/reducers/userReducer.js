import {
  SET_CURR_USER,
  ADD_USER,
  REMOVE_USER,
  EDIT_USER,
} from "../actionTypes/userActionTypes";
const initalState = {
  currentUser: null,
  users: [],
};
export default function userReducer(state = initalState, action) {
  switch (action.type) {
    case SET_CURR_USER: {
      const id = action.payload;
      if (id === null)
        return {
          ...state,
          currentUser: null,
        };
      const usersCopy = [...state.users];
      const username = usersCopy.find((user) => user.id === id).username
      return {
        ...state,
        currentUser: { id, username },
      };
    }

    case ADD_USER: {
      const { id, username } = action.payload;
      return {
        ...state,
        users: [...state.users, { id, username }],
      };
    }
    case REMOVE_USER: {
      const id = action.payload;
      const usersCopy = [...state.users];

      return {
        ...state,
        currentUser: null,
        users: usersCopy.filter((user) => user.id !== id),
      };
    }
    case EDIT_USER: {
      const { id, username } = action.payload;
      const usersCopy = [...state.users];
      const oldUserIndex = usersCopy.findIndex((user) => user.id === id);
      const updatedUser = { id, username };
      usersCopy.splice(oldUserIndex, 1, updatedUser);
      return {
        ...state,
        currentUser: updatedUser,
        users: usersCopy,
      };
    }

    default:
      return state;
  }
}
