import {  useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../store/actions/userActions";

const UserDropDown = () => {
  const users = useSelector((state) => state.userState.users);
  const dropDownRef = useRef()
  const dispatch = useDispatch()
  const handleUserChange = () => {
    const id = +dropDownRef.current.value
    dispatch(setCurrentUser(id>-1?id:null))
  };
  return (
    <select ref={dropDownRef} defaultValue={"-1"} onChange={handleUserChange}>
      <option value="-1">-- select user --</option>
      {users.map((user) => {
        return (
          <option key={user.id} value={user.id}>
            {user.username}
          </option>
        );
      })}
    </select>
  );
};
export default UserDropDown;
