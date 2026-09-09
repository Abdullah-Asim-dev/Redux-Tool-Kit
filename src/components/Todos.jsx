import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, setEditTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos || [])
    const dispatch = useDispatch()

    if (todos.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-slate-500 text-center">
                <span className="text-4xl mb-3">📁</span>
                <p className="text-sm font-medium">No tasks available.</p>
                <p className="text-xs text-slate-600 mt-1">
                    Use the input console above to add an action item.
                </p>
            </div>
        )
    }

    return (
        <div className="w-full">
            <ul className="flex flex-col gap-3.5 list-none p-0 m-0">
                {todos.map((todo) => (
                    <li
                        className="group flex justify-between items-center bg-slate-950/40 hover:bg-slate-950/70 p-4 rounded-xl border border-slate-800/60 hover:border-indigo-500/30 transition-all duration-300 shadow-sm hover:shadow-indigo-950/10"
                        key={todo.id}
                    >
                        <div className="flex items-center gap-3 min-w-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors duration-300 shrink-0"></span>

                            <span className="text-slate-200 text-sm md:text-base font-medium truncate max-w-md group-hover:text-white transition-colors">
                                {todo.text}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 ml-4 shrink-0">

                            {/* Edit Button */}
                            <button
                                onClick={() =>
                                    dispatch(
                                        setEditTodo({
                                            id: todo.id,
                                            text: todo.text
                                        })
                                    )
                                }
                                className="text-amber-400 bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 p-2.5 rounded-lg border border-amber-500/20 transition-all duration-200 cursor-pointer"
                                title="Edit Task"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                    />
                                </svg>
                            </button>

                            {/* Delete Button */}
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-rose-400 bg-rose-500/10 hover:bg-rose-500 hover:text-white p-2.5 rounded-lg border border-rose-500/20 transition-all duration-200 cursor-pointer"
                                title="Purge Task"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos




