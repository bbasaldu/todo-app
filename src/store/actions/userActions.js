import {SET_CURR_USER, ADD_USER, REMOVE_USER, EDIT_USER} from '../actionTypes/userActionTypes'
let nextUserId = 0


export const setCurrentUser = (id) => ({
    type: SET_CURR_USER,
    payload: id
})

export const addUser = username => ({
    type: ADD_USER,
    payload: {
        id: ++nextUserId,
        username
    }
})

export const removeUser = id => ({
    type: REMOVE_USER,
    payload: id
})

export const editUser = (id, username) => ({
    type: EDIT_USER,
    payload: {
        id,
        username
    }
})