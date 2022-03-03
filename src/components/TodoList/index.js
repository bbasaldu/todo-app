import TodoItem from "../TodoItem"
import cls from './TodoList.module.css'
const TodoList = props => {
    const {items} = props
    return (
        <ul className={cls.todoList}>
            {items.map(item => {
                return (
                    <TodoItem key={item.id} {...item}/>
                )
            })}
        </ul>
    )
}
export default TodoList