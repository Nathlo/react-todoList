import React, { useState } from 'react'

const TodoForm = ( {addTodo} ) => {
  // initialise the iput to a empty string
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault(); // to prevent the page reloading

      addTodo(value);

      setValue("");
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='What is the task today?'
              onChange={ (e) => setValue(e.target.value) }  />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
export default TodoForm