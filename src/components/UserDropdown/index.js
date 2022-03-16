import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../store/actions/userActions";
const UserDropDown = () => {
  const users = useSelector((state) => state.users.byId);
  const [memoizedUsers, setMemoizedUsers] = useState(users)
  useEffect(() => {
    const currLen = Object.keys(memoizedUsers).length
    const newLen = Object.keys(users).length
    if(currLen !== newLen){
      console.log('new users added/deleted')
      setMemoizedUsers(users)
    }
  },[memoizedUsers, users])
  const dropDownRef = useRef();
  const dispatch = useDispatch();
  const handleUserChange = () => {
    const id = dropDownRef.current.value;
    dispatch(setCurrentUser(id !== "-1" ? id : null));
  };
  
  return (
    <select ref={dropDownRef} defaultValue={"-1"} onChange={handleUserChange}>
      <option value="-1">-- select user --</option>
      {Object.keys(memoizedUsers).map((userId) => {
        if (userId === "currentUser") return null;
        const username = memoizedUsers[userId].name;
        return (
          <option key={userId} value={userId}>
            {username}
          </option>
        );
      })}
    </select>
  );
};
export default UserDropDown;
