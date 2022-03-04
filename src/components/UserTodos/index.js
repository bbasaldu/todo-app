import cls from "./UserTodos.module.css";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import { useSelector } from "react-redux";
const UserTodos = () => {
  const todoItems = useSelector((state) => state.todoItemState.todoItems);
  const currentUser = useSelector((state) => state.userState.currentUser);
  return (
    <div className={cls.userTodoWrapper}>
      {currentUser && (
        <>
          <TodoInput />
          <TodoList items={todoItems} />
        </>
      )}
    </div>
  );
};
export default UserTodos;
