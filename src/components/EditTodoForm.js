import React, { useState } from "react";

export const EditTodoForm = ({editTodo , task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
       e.preventDefault();
       editTodo(value , task.id)
       setValue("")
    }
    return (
        <>
        
        <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" 
        placeholder="update task "/>
        <button type="submit" className="todo-btn" 
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        >update Task
            </button>
        </form>
        </>
    )
}