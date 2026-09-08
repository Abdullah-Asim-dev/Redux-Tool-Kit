import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: '1', text: "Hello world raza" }],
    editTodo: { id: null, text: '' } // Yeh naya state hai edit track karne ke liye
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // 1. Edit par click karte hi todo ka data yahan save hoga
        setEditTodo: (state, action) => {
            state.editTodo = action.payload
        },
        // 2. Form submit hone par todo update hoga
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const existingTodo = state.todos.find(todo => todo.id === id)
            if (existingTodo) {
                existingTodo.text = text
            }
            state.editTodo = { id: null, text: '' } // Reset edit state
        }
    }
})

export const { addTodo, removeTodo, setEditTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer
