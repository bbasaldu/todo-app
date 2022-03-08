import { useEffect } from "react";
import Users from "./components/Users";
import UserTodos from "./components/UserTodos";
import { fetchData } from "./store/actions/userActions";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  },[dispatch])

  return (
    <>
      <Users/>
      <UserTodos/>
    </>
  )
}

export default App;
