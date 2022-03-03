import cls from './TodoItem.module.css'
const TodoItem = props => {
    const {content, id} = props
    return (
        <li className={cls.todoItem}>
            <div>{content}</div>
            <div>{id}</div>
        </li>
    )
}
export default TodoItem