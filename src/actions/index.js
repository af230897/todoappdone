import {ADD_TODO,TOGGLE_TODO, ALL_TODOS, INCOMPLETED_TODOS,COMPLETED_TODOS} from './actionTypes'

let nextId =0
export const addTodo = (text) =>({
    type : ADD_TODO,
    id:nextId++,
    text

})

export const toggleTodo =(id) => ({
    type: TOGGLE_TODO,
    id
})

export const allTodos = (text) =>({
    type : ALL_TODOS,
    text

})
export const completedTodos = (text) =>({
    type : COMPLETED_TODOS,
    text

})
export const incompletedTodos = (text) =>({
    type : INCOMPLETED_TODOS,
    text

})


