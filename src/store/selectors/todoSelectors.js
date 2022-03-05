import { createSelector } from "@reduxjs/toolkit";

const currentUserId = (state) => state.users.byId.currentUser.userId;
const usersById = (state) => state.users.byId;
const todosById = (state) => state.todos.byId;

export const selectCurrentUserTodos = createSelector(
  [currentUserId, usersById, todosById],
  (currentUserId, usersById, todosById) => {
    return usersById[currentUserId].todos.map((todoId) => ({
      ...todosById[todoId],
      todoId,
    }));
  }
);
