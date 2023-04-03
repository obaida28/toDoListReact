import React , {useState} from 'react'
import { ToDoFrom } from './ToDoFrom'
import { v4 as uuidV4 } from 'uuid'
import { Todo } from './ToDo';
import { EditToDoForm } from './EditToDoForm';
uuidV4();
export const ToDoWrapper = () => {
  const [list , setList] = useState([])
  const addTo = ad => {
    setList([...list , { id : uuidV4() , task : ad , isEdited : false , completed : false} ])
  }
  const toggleCompleted = id => {
    setList(list.map(
      task => task.id === id ? { ...task , completed : !task.completed } : task
    ))
  }
  const deleteToDo = id => {
    setList(
      list.filter(task => task.id != id)
    )
  }
  const ToEdit = id => {
    setList(list.map(
      task => task.id === id ? { ...task , isEdited : !task.isEdited } : task
    ))
  }
  const Editing = (id , task) => {
    setList(list.map(
      _task => _task.id === id ? { ..._task , task , isEdited : !_task.isEdited } : _task
    ))
  }
  return (
    <div className="TodoWrapper">
        <ToDoFrom addToDo = {addTo}/>
        {
          list.map( _task => (
            _task.isEdited ?
              <EditToDoForm task= {_task}  editTask={Editing}/> :
              <Todo task= {_task} key={_task.id} EditToDo = {ToEdit}
              toggleCompleted={toggleCompleted} deleteToDo = {deleteToDo}/>
          ))
        }
    </div>
  )
}
