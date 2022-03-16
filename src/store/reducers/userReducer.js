import {
  SET_HAS_FETCHED,
  SET_CURR_USER,
  ADD_USER,
  REMOVE_USER,
  EDIT_USER,
} from "../actionTypes/userActionTypes";
import { ADD_TODO, REMOVE_TODO } from "../actionTypes/todoActionTypes";
import { combineReducers } from "@reduxjs/toolkit";
import { REMOVE, modify, EDIT } from "../utility";

function usersById(state = {}, action) {
  switch (action.type) {
    //user actions
    case ADD_USER: {
      const newState = action.payload;
      return {
        ...state,
        ...newState.entities.users
      };
    }
    case REMOVE_USER: {
      const { userId } = action.payload;
      const result = modify(REMOVE, Object, state, [userId]);
      return result;
    }
    case EDIT_USER: {
      //* always remember to create a new object, so useSelector gives updated objects
      const { userId, name } = action.payload;
      return modify(EDIT, null, state, [userId], "name", name);
    }

    //todo actions
    

    case REMOVE_TODO: {
      const { userId, todoId } = action.payload;
      const currentUserState = state[userId];
      return {
        ...state,
        [userId]: {
          ...currentUserState,
          todos: [...currentUserState.todos.filter((id) => id !== todoId)],
        },
      };
    }
    default:
      return state;
  }
}

function allUsers(state = [], action) {
  switch (action.type) {
    case ADD_USER: {
      const newState = action.payload;
      return [...state, ...newState.result];
    }
    case REMOVE_USER: {
      const { userId } = action.payload;
      const result = modify(REMOVE, Array, state, [userId]);
      return result;
    }
    default:
      return state;
  }
}
function currentUser(state = null, action) {
  switch (action.type) {
    case SET_CURR_USER: {
      const userId = action.payload;
      return userId;
    }
    case REMOVE_USER: {
      return null;
    }
    default:
      return state;
  }
}
function hasFetched(state = false, action) {
  switch (action.type) {
    case SET_HAS_FETCHED: {
      return action.payload;
    }
    default:
      return state;
  }
}
const userReducer = combineReducers({
  hasFetched,
  currentUser,
  byId: usersById,
  allIds: allUsers,
});
export default userReducer;
