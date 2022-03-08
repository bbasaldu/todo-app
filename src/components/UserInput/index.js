import { useRef } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../../store/actions/userActions";
const UserInput = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const userInput = inputRef.current.value;
    if (userInput.length > 0) {
      dispatch(postUser(userInput));
      inputRef.current.value = "";
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};
export default UserInput;
