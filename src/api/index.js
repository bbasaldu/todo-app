import { v4 } from "uuid";
const fakeDB = {
  users: [
    {
      name: "brian",
      id: v4(),
      todos: [
        { id: v4(), content: "do this" },
        { id: v4(), content: "do that" },
      ],
    },
    {
      name: "ed",
      id: v4(),
      todos: [
        { id: v4(), content: "do more" },
        { id: v4(), content: "do less" },
      ],
    },
  ],
};
const DELAY_TIME = 2000;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//fake user api requests
export const getUsers = () => delay(DELAY_TIME).then(() => fakeDB.users);
export const addUserToDB = (name) =>
  delay(DELAY_TIME).then(() => {
    const newUser = { name, id: v4(), todos: [] };
    fakeDB.users.push(newUser);
    return newUser;
  });
export const removeUserFromDB = (userId) =>
  delay(DELAY_TIME).then(() => {
    const userIndex = fakeDB.users.findIndex((user) => user.id === userId);
    const [removedUser] = fakeDB.users.splice(userIndex, 1);
    return {
      name: removedUser.name,
      userId: removedUser.id,
      todos: removedUser.todos.map((todo) => todo.id),
    };
  });

export const editUserFromDB = (userId, name) =>
  delay(DELAY_TIME).then(() => {
    const currUser = fakeDB.users.find((user) => user.id === userId);
    currUser.name = name;
    return { userId: currUser.id, name: currUser.name };
  });

//fake todo api requests
export const addTodoToDB = (userId, content) =>
  delay(DELAY_TIME).then(() => {
    const newTodo = { userId, id: v4(), content };
    const currUser = fakeDB.users.find((user) => user.id === userId);
    currUser.todos.push(newTodo);
    return newTodo;
  });
export const removeTodoFromDB = (userId, todoId) =>
  delay(DELAY_TIME).then(() => {
    const currUser = fakeDB.users.find((user) => user.id === userId);
    const todoIndex = currUser.todos.findIndex((todo) => todo.id === todoId);
    const [removedTodo] = currUser.todos.splice(todoIndex, 1);
    return { userId: currUser.id, id: removedTodo.id };
  });

export const editTodoFromDB = (userId, todoId, content) =>
  delay(DELAY_TIME).then(() => {
    const currUser = fakeDB.users.find((user) => user.id === userId);
    const todo = currUser.todos.find((todo) => todo.id === todoId);
    todo.content = content;
    return { userId: currUser.id, todoId: todo.id, content: todo.content };
  });
