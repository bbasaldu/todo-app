import { useDispatch } from "react-redux";
import { fetchData } from "../../store/actions/userActions";
import cls from "./RefreshButton.module.css";
/*
Only using this to practice throttling/debouncing/
sending so many requests at a time

*/
const RefreshButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchData());
  };
  return (
    <button onClick={handleClick} className={cls.button}>
      Fetch Data Manually
    </button>
  );
};
export default RefreshButton;
