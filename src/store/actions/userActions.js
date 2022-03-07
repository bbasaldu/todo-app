import {
  SET_CURR_USER,
  ADD_USER,
  REMOVE_USER,
  EDIT_USER,
} from "../actionTypes/userActionTypes";
let nextUserId = 0;

export const setCurrentUser = (userId) => ({
  type: SET_CURR_USER,
  payload: userId,
});

export const addUser = (name) => ({
  type: ADD_USER,
  payload: {
    userId: ++nextUserId,
    name,
  },
});

export const removeUser = (currentUser) => ({
  type: REMOVE_USER,
  payload: {
      ...currentUser
  }
});

export const editUser = (id, username) => ({
  type: EDIT_USER,
  payload: {
    id,
    username,
  },
});
