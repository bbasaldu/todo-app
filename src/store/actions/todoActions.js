import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../actionTypes/todoActionTypes";
let nextTodoId = 0;

export const addTodo = (userId, content) => ({
    type: ADD_TODO,
    payload: {
        userId,
        id: ++nextTodoId,
        content
    }
})
export const removeTodo = (userId, todoId) => ({
    type: REMOVE_TODO,
    payload: {userId, todoId}
})

export const editTodo = (todoId, content) => ({
    type: EDIT_TODO,
    payload: {
        todoId,
        content
    }
})
