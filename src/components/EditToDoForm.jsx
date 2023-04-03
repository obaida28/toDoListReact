import React , {useState} from 'react'

export const EditToDoForm = ({task , editTask}) => {
  const [Value , setValue] = useState(task.task)
  function handleChange(e){
    setValue(e.target.value)
  }
  function handleClick(e){
    e.preventDefault()
    //console.log(task)
    editTask(task.id , Value)
    setValue('')
  }
  return (
    <form className="TodoForm" onSubmit={ e => handleClick(e)}>
    <input type="text" value={Value}  className="todo-input" placeholder='Update my task?'
    onChange={e=> handleChange(e)}
    />
    <button type="submit" className='todo-btn'>Edit Task</button>
  </form>
  )
}
