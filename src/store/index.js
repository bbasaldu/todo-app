import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
//dev middleware for logging
const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }
export default createStore(rootReducer, applyMiddleware(logger))
/*
flux pattern with
normalized data schema
users: {
    byId: {
        u1: {
            name: user1,
            todos: [t1,t3,t5]
        },
        u2: {
            name: user2,
            todos: [t2,t4,t6]
        }
    },
    allIds: [u1, u2]
},
todos: {
    byId: {
        t1: {
            userId: u1,
            content: 'todo 1'
        },
        t2: {
            userId: u2,
            content: 'todo 2'
        },
        ....
        t6: 

    },
    allIds: [t1,t2,...,t6]
}
*/


/*
not normalized
data: {
    users: [
        {username: 'user1', id: 1, todos: [
            {id: 1, content: 'todo1'},
            ...
        ]}
        ...
    ]
}
*/