import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../actionTypes/todoActionTypes";
let nextTodoId = 0;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
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