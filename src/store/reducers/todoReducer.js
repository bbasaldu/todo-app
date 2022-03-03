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
        case REMOVE_TODO: {
            const id = action.payload
            const todoCopy = [...state.todoItems]
            
            return {
                ...state,
                todoItems: todoCopy.filter(todoItem => todoItem.id !== id)
            }
        }
        case EDIT_TODO: {
            const {content, id} = action.payload
            const todoCopy = [...state.todoItems]
            const oldItemIndex = todoCopy.findIndex(todoItem => todoItem.id === id)
            const updatedItem = {id, content}
            todoCopy.splice(oldItemIndex, 1, updatedItem)
            return {
                ...state,
                todoItems: todoCopy
            }
        }
        default: {
            return state
        }
    }
}