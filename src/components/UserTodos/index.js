import cls from './UserTodos.module.css'
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'
import { useSelector } from 'react-redux';
const UserTodos = () => {
  const todoItems = useSelector(state => state.todoItemState.todoItems)
  
  return (
      <div className={cls.userTodoWrapper}>
          <TodoInput />
          <TodoList items={todoItems}/>
      </div>
  )
};
export default UserTodos;
