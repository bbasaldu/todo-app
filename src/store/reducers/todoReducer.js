import { combineReducers } from "@reduxjs/toolkit";
import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  GET_TODOS
} from "../actionTypes/todoActionTypes";
import {
  REMOVE_USER
} from "../actionTypes/userActionTypes"
// const initalState = {
//   todoItems: [],
// };
// export default function todoReducer(state = initalState, action) {
//   switch (action.type) {
//     case ADD_TODO: {
//       const { userId, id, content } = action.payload;
//       const todoCopy = [...state.todoItems];
//       const currentUserIndex = todoCopy.findIndex(
//         (item) => item.userId === userId
//       );
//       const newItem = { id, content };
//       if (currentUserIndex > -1) {
//         const currentTodos = todoCopy[currentUserIndex].items;
//         todoCopy.splice(currentUserIndex, 1, {
//           userId,
//           id,
//           items: [...currentTodos, newItem],
//         });
//       } else {
//         todoCopy.push({ userId, id, items: [newItem] });
//       }

//       return {
//         ...state,
//         todoItems: todoCopy,
//       };
//     }
//     case REMOVE_TODO: {
//       const id = action.payload;
//       const todoCopy = [...state.todoItems];

//       return {
//         ...state,
//         todoItems: todoCopy.filter((todoItem) => todoItem.id !== id),
//       };
//     }
//     case EDIT_TODO: {
//       const { content, id } = action.payload;
//       const todoCopy = [...state.todoItems];
//       const oldItemIndex = todoCopy.findIndex((todoItem) => todoItem.id === id);
//       const updatedItem = { id, content };
//       todoCopy.splice(oldItemIndex, 1, updatedItem);
//       return {
//         ...state,
//         todoItems: todoCopy,
//       };
//     }
//     case GET_TODOS: {
//       const userId = action.payload
//       const currentUser = state.todoItems.find(item => item.userId === userId)
//       if(!currentUser){
//         return []
//       }
//       return currentUser.items
//     }
//     default: {
//       return state;
//     }
//   }
// }
function todosById(state = {}, action){
  switch(action.type){
    //user actions
    case REMOVE_USER: {
      const {userId} = action.payload
      

      return
    }

    //todo actions
    case ADD_TODO: {
      const {userId, id, content} = action.payload
      return {
        ...state,
        [id]: {
          userId,
          content
        }
      }
    }
    default:
      return state
  }
}

function allTodos(state=[], action){
  switch(action.type){
    case ADD_TODO: {
      const {id} = action.payload
      return [...state, id]
    }
    default:
      return state
  }
}
const todoReducer = combineReducers({
  byId: todosById,
  allIds: allTodos
})

export default todoReducer