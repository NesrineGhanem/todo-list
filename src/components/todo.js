// import React from "react";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faPenToSquare} from "@fortawesome/free-solid-svg-icons"
// import {faTrash} from "@fortawesome/free-solid-svg-icons"

// export const Todo = ({task,toggleComplete,deleteTodo,editTodo }) => {
//     return (
//         <div className="Todo">
//             {/* <p onClick={()=> toggleComplete(task.id)} 
//            className={`${task.completed ?'completed':""}`} >
//                {task.task}
//                 </p> */}
//                 <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
//             <div>
//                 <FontAwesomeIcon  icon={faPenToSquare}
//                 onClick={()=>editTodo(task.id)}
//                 />
//                 <FontAwesomeIcon  icon={faTrash}
//                 onClick={() => deleteTodo(task.id)}
//                 />
//             </div>
//         </div>
//     )
// }



import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  console.log(task)
  return (
    
    <div className="Todo">
        
        <p className={`${task.completed ? 'xxx' : ""}`}
         onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}