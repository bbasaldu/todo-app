import { addTodoToDB } from "../../api";
import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../actionTypes/todoActionTypes";
let nextTodoId = 0;

export const addTodo = (userId,id, content) => ({
    type: ADD_TODO,
    payload: {
        userId,
        id,
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

//THUNK ACTION CREATORS
export const postTodo = (userId, content) => async (dispatch) => {
    const newTodo = await addTodoToDB(userId, content)
    dispatch(addTodo(newTodo.userId, newTodo.id, newTodo.content))
}
