import React, { useState } from 'react'

const TodoForm = () => {
  // initialise the iput to a empty string
  const [value, setValue] = useState("")

  return (
    <form className='TodoForm'>
        <input type='text' className='todo-input' placeholder='What is the task today?'
              onChange={ (e) => setValue(e.target.value) }  />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm