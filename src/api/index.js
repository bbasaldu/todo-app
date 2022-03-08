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
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const getUsers = () => delay(1000).then(() => fakeDB.users);
export const addUserToDB = (name) =>
  delay(1000).then(() => {
    const newUser = { name, id: v4(), todos: [] };
    fakeDB.users.push(newUser);
    return newUser;
  });
export const addTodoToDB = (userId, content) => delay(500).then(() => {
  const newTodo = {userId, id: v4(), content}
  const currUser = fakeDB.users.find(user => user.id === userId)
  currUser.todos.push(newTodo)
  return newTodo
})
