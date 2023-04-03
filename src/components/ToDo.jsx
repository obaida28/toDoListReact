import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({task , toggleCompleted , deleteToDo , EditToDo}) => {
 
  return (
    <div className="Todo">
        <p className={`${task.completed ? 'completed' : ''}`} 
          onClick={() => toggleCompleted(task.id)}>
            {task.task}
        </p>
        <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() =>EditToDo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)}/>
        </div>
    </div>
  )
}