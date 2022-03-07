import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";
import cls from "./TodoInput.module.css";
const TodoInput = () => {
  const currentUserId = useSelector((state) => state.users.currentUser);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const userInput = inputRef.current.value;
    if (userInput.length > 0) {
      dispatch(addTodo(currentUserId, userInput));
      inputRef.current.value = "";
    }
  };
  return (
    <div className={cls.todoInput}>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
export default TodoInput;
