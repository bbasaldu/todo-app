import { useSelector } from "react-redux";
import { selectCurrentUserTodos } from "../../store/selectors";
import TodoItem from "../TodoItem";
import cls from "./TodoList.module.css";
const TodoList = () => {
  const todos = useSelector(selectCurrentUserTodos);
  return (
    <ul className={cls.todoList}>
      {todos.map((todo) => {
        return <TodoItem key={todo.todoId} todo={todo} />;
      })}
    </ul>
  );
};
export default TodoList;
