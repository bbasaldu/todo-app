import { editUserFromDB, getUsers, removeUserFromDB } from "../../api";
import {
  SET_CURR_USER,
  ADD_USER,
  REMOVE_USER,
  EDIT_USER,
} from "../actionTypes/userActionTypes";
import { addTodo } from "../actions/todoActions";
import { addUserToDB } from "../../api";

export const setCurrentUser = (userId) => ({
  type: SET_CURR_USER,
  payload: userId,
});

export const addUser = (name, userId) => ({
  type: ADD_USER,
  payload: {
    name,
    userId,
  },
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

export const fetchData = () => async (dispatch) => {
  const users = await getUsers();
  users.forEach((user) => {
    dispatch(addUser(user.name, user.id));
    user.todos.forEach((todo) => {
      dispatch(addTodo(user.id, todo.id, todo.content));
    });
  });
};

export const postUser = (name) => async (dispatch) => {
  const newUser = await addUserToDB(name);
  dispatch(addUser(newUser.name, newUser.id));
  newUser.todos.forEach((todo) => {
    dispatch(addTodo(newUser.id, todo.id, todo.content));
  });
};

export const deleteUser = (currUser) => async (dispatch) => {
  const deletedUser = await removeUserFromDB(currUser.userId);
  dispatch(removeUser(deletedUser))
};

export const updateUser = (userId, name) => async (dispatch) => {
  const updatedUser = await editUserFromDB(userId, name)
  dispatch(editUser(updatedUser.userId, updatedUser.name))
}
