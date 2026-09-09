import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../Features/todo/todoSlice' 

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    
    const editTodoData = useSelector(state => state.editTodo)

    useEffect(() => {
        if (editTodoData && editTodoData.id) {
            setInput(editTodoData.text)
        }
    }, [editTodoData])

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!input.trim()) return

        if (editTodoData && editTodoData.id) {
            dispatch(updateTodo({ id: editTodoData.id, text: input }))
        } else {
            dispatch(addTodo(input))
        }
        setInput('')
    }

    const isEditing = editTodoData && editTodoData.id;

    return (
        <form onSubmit={addTodoHandler} className="flex flex-col sm:flex-row gap-3 w-full">
            <div className="relative flex-1">
                {/* 
                  1. style={{ backgroundColor: '#1e293b' }} se background ko solid gray-blue color milta hai.
                  2. style={{ border: '2px solid #4f46e5' }} se boundaries par ek solid bright Indigo border lagti hai.
                */}
                <input
                    type="text"
                    style={{ 
                        backgroundColor: '#1e293b', 
                        border: '2px solid #4f46e5',
                        color: '#ffffff'
                    }}
                    className="w-full rounded-xl text-base outline-none py-3 px-4 transition-all duration-300 placeholder:text-slate-400 shadow-lg"
                    placeholder="Type your task here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                {isEditing && (
                    <span className="absolute right-3 top-4 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                )}
            </div>
            
            <button
                type="submit"
                style={{ backgroundColor: isEditing ? '#d97706' : '#4f46e5' }}
                className="sm:w-auto px-6 font-semibold py-3 rounded-xl text-white shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0 hover:opacity-90 active:scale-95 transition-all"
            >
                <span>{isEditing ? '⚡' : '＋'}</span>
                {isEditing ? 'Update Task' : 'Add Task'}
            </button>
        </form>
    )
}

export default AddTodo

