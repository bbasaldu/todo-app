const data = {
    users: []
}
const getUsers = () => {
    return data.users
}
const postUser = (d) => {
    const {name, id} = d
    data.users.push({name,id,todos: []})
}
const deleteUser = (d) => {

}
//maybe do something like return the list of todoIds this user had
//and the userId?

//dispatch(removeUser({userId, todoIds}))
//type: REMOVE_USER
//payload: {userId, todoIds}
//in byId reducer:
/*
removeUser(){
    const {userId} = payload
    const userCopy = {...state}
    delete userCopy[userId]
    return {
        userCopy
    }
}
allIds reducer
removerUser (){
    const {userId} = payload
    return {
        state.filter(d => d.id !== userId)
    }
} 

in todoReducer

removeTodos(){
    const {todoIds} = payload
    const todoCopy = {...state}
    todoIds.forEach(todoId => delete todoCopy[todoId])
    return {
        todoCopy
    }
}
*/
const postTodo = (d) => {

}

const deleteTodo = (d) => {

}


