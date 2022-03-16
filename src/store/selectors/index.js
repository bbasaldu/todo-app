import { createSelector } from "@reduxjs/toolkit";
const userList = state => Object.keys(state.users.byId).map(id => id)
const currentUser = (state) => state.users.currentUser;
const usersById = (state) => state.users.byId;
const todosById = (state) => state.todos.byId;
//todo specfic
export const selectCurrentUserTodos = createSelector(
  [currentUser, usersById, todosById],
  (currentUser, usersById, todosById) => {
    return usersById[currentUser].todos.map((todoId) => ({
      ...todosById[todoId],
    }));
  }
);
//user specifc
export const selectCurrentUser = createSelector(
  [currentUser, usersById],
  (currentUser, usersById) => {
    const currentUserState = usersById[currentUser]
    return currentUserState?{...currentUserState,userId: currentUser}:null
  }
);
export const selectUserList = createSelector(
  [userList],
  (userList) => {
    return userList
  }
)
