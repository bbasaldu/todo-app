import { normalize } from "normalizr";
import { addTodoToDB, editTodoFromDB, removeTodoFromDB } from "../../api";
import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
} from "../actionTypes/todoActionTypes";
import { resSchema } from "../schema";
import { addUser } from "./userActions";

export const addTodo = (obj) => ({
  type: ADD_TODO,
  payload: obj
});
export const removeTodo = (userId, todoId) => ({
  type: REMOVE_TODO,
  payload: { userId, todoId },
});

export const editTodo = (todoId, content) => ({
  type: EDIT_TODO,
  payload: {
    todoId,
    content,
  },
});

//THUNK ACTION CREATORS
export const postTodo = (userId, content) => async (dispatch) => {
  const data = await addTodoToDB(userId, content);
  const updatedUsers = data.users
  const normalizedData = normalize(updatedUsers, resSchema)
  dispatch(addTodo(normalizedData))
  dispatch(addUser(normalizedData))
};
export const deleteTodo = (userId, todoId) => async (dispatch) => {
  const deletedTodo = await removeTodoFromDB(userId, todoId);

  dispatch(removeTodo(deletedTodo.userId, deletedTodo.id));
};
export const updateTodo = (userId, todoId, content) => async (dispatch) => {
  const updatedTodo = await editTodoFromDB(userId, todoId, content)
  dispatch(editTodo(updatedTodo.todoId, updatedTodo.content))
}
