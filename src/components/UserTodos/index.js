import cls from "./UserTodos.module.css";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import { useSelector } from "react-redux";
const UserTodos = () => {
  //should turn this to a isVisible state selector thing
  const currentUser = useSelector((state) => state.users.currentUser);

  return (
    <div className={cls.userTodoWrapper}>
      {currentUser && (
        <>
          <TodoInput />
          <TodoList />
        </>
      )}
    </div>
  );
};
export default UserTodos;
