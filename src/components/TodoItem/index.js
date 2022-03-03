import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/actions/todoActions";
import cls from "./TodoItem.module.css";
const TodoItem = (props) => {
  const { content, id } = props;
  const dispatch = useDispatch()
  const removeTodoItem = () => {
    dispatch(removeTodo(id))
  }
  return (
    <li className={cls.todoItem}>
      <div>{content}</div>
      <div>
        <span>{id}</span>
        <span className={cls.actionButtons}>
          <button>Edit</button>
          <button onClick={removeTodoItem}>Remove</button>
        </span>
      </div>
    </li>
  );
};
export default TodoItem;
