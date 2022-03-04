import { ADD_TODO, REMOVE_TODO, EDIT_TODO, GET_TODOS } from "../actionTypes/todoActionTypes";
let nextTodoId = 0;

export const addTodo = (userId, content) => ({
    type: ADD_TODO,
    payload: {
        userId,
        id: ++nextTodoId,
        content
    }
})
export const removeTodo = id => ({
    type: REMOVE_TODO,
    payload: id
})

export const editTodo = (id, content) => ({
    type: EDIT_TODO,
    payload: {
        id,
        content
    }
})
export const getTodos = (userId) => ({
    type: GET_TODOS,
    payload: userId
})