import {
  SET_CURR_USER,
  ADD_USER,
  REMOVE_USER,
  EDIT_USER,
} from "../actionTypes/userActionTypes";
import { ADD_TODO } from "../actionTypes/todoActionTypes";
import { combineReducers } from "@reduxjs/toolkit";
import {REMOVE, modify} from '../utility'

// const initalState = {
//   currentUser: null,
//   usersById: [],
// };
// export default function userReducer(state = initalState, action) {
//   switch (action.type) {
//     case SET_CURR_USER: {
//       const id = action.payload;
//       if (id === null)
//         return {
//           ...state,
//           currentUser: null,
//         };
//       const usersCopy = [...state.users];
//       const username = usersCopy.find((user) => user.id === id).username
//       return {
//         ...state,
//         currentUser: { id, username },
//       };
//     }

//     case ADD_USER: {
//       const { id, username } = action.payload;
//       return {
//         ...state,
//         users: [...state.users, { id, username }],
//       };
//     }
//     case REMOVE_USER: {
//       const id = action.payload;
//       const usersCopy = [...state.users];

//       return {
//         ...state,
//         currentUser: null,
//         users: usersCopy.filter((user) => user.id !== id),
//       };
//     }
//     case EDIT_USER: {
//       const { id, username } = action.payload;
//       const usersCopy = [...state.users];
//       const oldUserIndex = usersCopy.findIndex((user) => user.id === id);
//       const updatedUser = { id, username };
//       usersCopy.splice(oldUserIndex, 1, updatedUser);
//       return {
//         ...state,
//         currentUser: updatedUser,
//         users: usersCopy,
//       };
//     }
//     // TODO ACTIONS

//     // case ADD_TODO: {
//     //   return
//     // }

//     default:
//       return state;
//   }
// }
//currentUser = state => state.users.currentUser
//users = state => state.users.byId
/*
  selectCurrentUser = (currentUser ,users) => {
    return users[currentUser]
  }
*/

function usersById(state = { currentUser: null }, action) {
  switch (action.type) {
    //user actions

    //might move this, I feel like it should be seperate somehow
    //in userActions.js setCurrUser(payload: {userId, name})
    //since userItem only edits that
    case SET_CURR_USER: {
      const userId = action.payload;
      return {
        ...state,
        currentUser: userId !== null ? { ...state[userId], userId } : null,
      };
    }

    case ADD_USER: {
      const { userId, name } = action.payload;
      return {
        ...state,
        [userId]: {
          name,
          todos: [],
        },
      };
    }

    case REMOVE_USER: {
      const {userId} = action.payload;
      const result = modify(REMOVE, Object, state, [userId]);
      return { ...result, currentUser: null };
    }
    case EDIT_USER: {
      const {userId, name} = action.payload
      
      return
    }
    //todo actions
    case ADD_TODO: {
      const { userId, id } = action.payload;
      const currentUserState = state[userId];
      return {
        ...state,
        [userId]: {
          ...currentUserState,
          todos: [...currentUserState.todos, id],
        },
        currentUser: {
          ...currentUserState,
          todos: [...currentUserState.todos, id],
          userId
        }
      };
    }
    default:
      return state;
  }
}

function allUsers(state = [], action) {
  switch (action.type) {
    case ADD_USER: {
      const { userId } = action.payload;
      return [...state, userId];
    }
    case REMOVE_USER: {
      const {userId} = action.payload
      const result = modify(REMOVE, Array, state, [userId])
      return result
    }
    default:
      return state;
  }
}

const userReducer = combineReducers({
  byId: usersById,
  allIds: allUsers,
});
export default userReducer;
