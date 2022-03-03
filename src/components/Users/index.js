import UserDropDown from "../UserDropdown";
import UserInput from "../UserInput";
import UserItem from "../UserItem";
import cls from "./Users.module.css";
const Users = () => {
  return (
    <div className={cls.usersWrapper}>
      <UserDropDown />
      <UserInput />
      <UserItem />
    </div>
  );
};
export default Users;
