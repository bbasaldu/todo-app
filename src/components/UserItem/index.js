import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeUser, editUser} from '../../store/actions/userActions'
import cls from "./UserItem.module.css";
const UserItem = (props) => {
  const currentUser = useSelector((state) => state.userState.currentUser);
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false);
  const editInputRef = useRef();
  const removeUserItem = () => {
    dispatch(removeUser(currentUser.id))
  }
  const editCurrentUser = (ev) => {
    ev.preventDefault();
    const newContent = editInputRef.current.value;
    if (newContent.length > 0) {
      dispatch(editUser(currentUser.id, newContent));
    }
    setEditMode(false);
  }
  return (
    <div>
      {currentUser && (
        <div className={cls.item}>
          {!editMode && <span>{currentUser.username}</span>}
          {editMode && (
            <span>
              <form onSubmit={editCurrentUser}>
                <input ref={editInputRef} type="text" defaultValue={currentUser.username} />
                <button type="submit">Submit</button>
              </form>
            </span>
          )}

          <span>
            <span>{`id: ${currentUser.id}`}</span>
            <button onClick={() => setEditMode(true)}>Edit</button>
            <button onClick={removeUserItem}>Remove</button>
          </span>
        </div>
      )}
      {!currentUser && <div>No User Selected</div>}
    </div>
  );
};
export default UserItem;
