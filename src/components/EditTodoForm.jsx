import React, { useState } from 'react'

const EditTodoForm = ( {editTodo, task} ) => {
  // initialise the iput to a empty string
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
      e.preventDefault(); // to prevent the page reloading

      editTodo(value, task.id);

      setValue("");
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Update Task'
              onChange={ (e) => setValue(e.target.value) }  />
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
export default EditTodoForm
