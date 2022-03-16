import { editUserFromDB, getUsers, removeUserFromDB } from "../../api";
import {
  SET_HAS_FETCHED,
  SET_CURR_USER,
  ADD_USER,
  REMOVE_USER,
  EDIT_USER,
} from "../actionTypes/userActionTypes";
//this import should be in a thunk creator file specifically to group seperate actions together
import { addTodo } from "../actions/todoActions";
import { addUserToDB } from "../../api";
import { normalize } from "normalizr";
import {resSchema} from '../schema.js'
export const setHasFetched = (bool) => ({
  type: SET_HAS_FETCHED,
  payload: bool,
});

export const setCurrentUser = (userId) => ({
  type: SET_CURR_USER,
  payload: userId,
});

export const addUser = (obj) => ({
  type: ADD_USER,
  payload: obj
});

export const removeUser = (currentUser) => ({
  type: REMOVE_USER,
  payload: {
    ...currentUser,
  },
});

export const editUser = (userId, name) => ({
  type: EDIT_USER,
  payload: {
    userId,
    name,
  },
});

// THUNK ACTION CREATORS

export const fetchData = () => async (dispatch, getState) => {
  //to only fetch once
  if (getState().users.hasFetched) {
    return Promise.resolve();
  }
  //shouldve named it isFetching
  dispatch(setHasFetched(true));
  const data = await getUsers();
  const users = data.users
  const normalizedData = normalize(users, resSchema)
  dispatch(addUser(normalizedData))
  dispatch(addTodo(normalizedData))
  //so we wait until that last fetch request finishes before going for a new one
  //https://egghead.io/lessons/javascript-redux-avoiding-race-conditions-with-thunks
  dispatch(setHasFetched(false))
};

export const postUser = (name) => async (dispatch) => {
  const data = await addUserToDB(name);
  const users = data.users
  const normalizedData = normalize(users, resSchema)
  dispatch(addUser(normalizedData))
};

export const deleteUser = (currUser) => async (dispatch) => {
  const deletedUser = await removeUserFromDB(currUser.userId);
  dispatch(removeUser(deletedUser));
};

export const updateUser = (userId, name) => async (dispatch) => {
  const updatedUser = await editUserFromDB(userId, name);
  dispatch(editUser(updatedUser.userId, updatedUser.name));
};
