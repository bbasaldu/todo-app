import { addTodoToDB, editTodoFromDB, removeTodoFromDB } from "../../api";
import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
} from "../actionTypes/todoActionTypes";

export const addTodo = (userId, id, content) => ({
  type: ADD_TODO,
  payload: {
    userId,
    id,
    content,
  },
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
  const newTodo = await addTodoToDB(userId, content);
  dispatch(addTodo(newTodo.userId, newTodo.id, newTodo.content));
};
export const deleteTodo = (userId, todoId) => async (dispatch) => {
  const deletedTodo = await removeTodoFromDB(userId, todoId);

  dispatch(removeTodo(deletedTodo.userId, deletedTodo.id));
};
export const updateTodo = (userId, todoId, content) => async (dispatch) => {
  const updatedTodo = await editTodoFromDB(userId, todoId, content)
  dispatch(editTodo(updatedTodo.todoId, updatedTodo.content))
}
