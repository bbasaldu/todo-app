import { useEffect, useState } from "react";
import Users from "./components/Users";
import UserTodos from "./components/UserTodos";
import { fetchData } from "./store/actions/userActions";
import { useDispatch } from "react-redux";
import RefreshButton from "./components/RefreshButton";
function App() {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchData())
  // },[dispatch])
  const [count, setCount] = useState(1)
  useEffect(() => {
    setInterval(() => {
      setCount(lastCount => lastCount + 1)
    }, 1)
  },[]) 
  return (
    <div>
      <p>
        {`Annie is as beautiful as ${count} sun${count>1?'s':''}`}
      </p>
    </div>
    // <>
    //   <RefreshButton/>
    //   <Users/>
    //   <UserTodos/>
    // </>
  )
}

export default App;
