import React , {useState} from 'react'

export const ToDoFrom = ({addToDo}) => {
  const [Value , setValue] = useState('')
  function handleChange(e){
    setValue(e.target.value)
  }
  function handleClick(e){
    e.preventDefault()
    addToDo(Value)
    setValue('')
  }
  return (
    <form className="TodoForm" onSubmit={ e => handleClick(e)}>
    <input type="text" value={Value}  className="todo-input" placeholder='What is the task today?'
    onChange={e=> handleChange(e)}
    />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}
