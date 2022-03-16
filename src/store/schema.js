import { schema } from 'normalizr'
export const todoSchema = new schema.Entity('todos')
export const userSchema = new schema.Entity('users', {
    todos: [todoSchema]
})
export const resSchema = [userSchema]
