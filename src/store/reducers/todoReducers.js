import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../actionTypes/todoActionTypes";
const initalState = {
    todoItems: []
}
export default function todoReducer(state = initalState, action){
    switch (action.type) {
        case ADD_TODO: {
            const {id, content} = action.payload;
            return {
                ...state,
                todoItems: [...state.todoItems, {id, content}]
            }
        }
        default: {
            return state
        }
    }
}