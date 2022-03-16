import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUserTodos } from "../../store/selectors";
import TodoItem from "../TodoItem";
import cls from "./TodoList.module.css";
const TodoList = () => {
  const todos = useSelector(selectCurrentUserTodos);
  useEffect(() =>{
    console.log(todos)
  },[todos])
  return (
    <ul className={cls.todoList}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};
export default TodoList;
