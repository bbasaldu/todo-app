import { combineReducers } from "@reduxjs/toolkit";
import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
} from "../actionTypes/todoActionTypes";
import { REMOVE_USER } from "../actionTypes/userActionTypes";
import { modify, REMOVE } from "../utility";

function todosById(state = {}, action) {
  switch (action.type) {
    //user actions
    case REMOVE_USER: {
      const { todos } = action.payload;
      return modify(REMOVE, Object, state, todos);
    }

    //todo actions
    case ADD_TODO: {
      const { userId, id, content } = action.payload;
      return {
        ...state,
        [id]: {
          userId,
          content,
        },
      };
    }
    case REMOVE_TODO: {
      const { todoId } = action.payload;
      return modify(REMOVE, Object, state, [todoId]);
    }
    case EDIT_TODO: {
      const { todoId, content } = action.payload;
      const currentTodoState = state[todoId];
      return {
        ...state,
        [todoId]: {
          ...currentTodoState,
          content,
        },
      };
    }
    default:
      return state;
  }
}

function allTodos(state = [], action) {
  switch (action.type) {
    //user actions
    case REMOVE_USER: {
      const { todos } = action.payload;
      const result = modify(REMOVE, Array, state, todos);
      return result;
    }

    //todo actions
    case ADD_TODO: {
      const { id } = action.payload;
      return [...state, id];
    }
    case REMOVE_TODO: {
      const { todoId } = action.payload;
      return modify(REMOVE, Array, state, [todoId]);
    }
    default:
      return state;
  }
}
const todoReducer = combineReducers({
  byId: todosById,
  allIds: allTodos,
});

export default todoReducer;
