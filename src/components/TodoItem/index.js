import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../../store/actions/todoActions";
import cls from "./TodoItem.module.css";
const TodoItem = (props) => {
  const { content, id } = props;
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const editInputRef = useRef();
  const removeTodoItem = () => {
    dispatch(removeTodo(id));
  };
  const editTodoItem = (ev) => {
    ev.preventDefault();
    const newContent = editInputRef.current.value;
    if (newContent.length > 0) {
      dispatch(editTodo(id, newContent));
    }
    setEditMode(false);
  };
  return (
    <li className={cls.todoItem}>
      <div>
        {!editMode && <span>{content}</span>}
        {editMode && (
          <span>
            <form onSubmit={editTodoItem}>
              <input ref={editInputRef} type="text" defaultValue={content} />
              <button type="submit">Submit</button>
            </form>
          </span>
        )}
      </div>
      <div>
        <span>{`id: ${id}`}</span>
        <span className={cls.actionButtons}>
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={removeTodoItem}>Remove</button>
        </span>
      </div>
    </li>
  );
};
export default TodoItem;
