import cls from "./UserTodos.module.css";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import { useSelector } from "react-redux";
const UserTodos = () => {
  const currentUser = useSelector((state) => state.users.byId.currentUser);
  return (
    <div className={cls.userTodoWrapper}>
      {currentUser && (
        <>
          <TodoInput />
          <TodoList/>
        </>
      )}
    </div>
  );
};
export default UserTodos;
