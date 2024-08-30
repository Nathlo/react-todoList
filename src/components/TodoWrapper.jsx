import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';
uuidv4();

const TodoWrapper = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos, 
      { id: uuidv4(), task: todo, 
      completed: false, isEditing: false }]);
      console.log(todos);
  }

  const toggleComplete = id => {
    // first, mapping through the todo we are looking for with its ID we passed in
    // if todo's ID similar, we take a copy of that todo (...todo)
    // then, we update the 'completed' value. If it's false-->become true, and vice versa
    // if if todo's ID different, so return ID
    setTodos( todos.map(todo => todo.id === id ? {...
      todo, completed: !todo.completed} : todo ) )
  }

  return (
    <div className='TodoWrapper'>
      <h1>Tâches Faites !</h1>

        <TodoForm addTodo={addTodo} />

        {todos.map( (todo, index)  => (
            <Todo task={todo} key={index} 
              toggleComplete={toggleComplete}/>
        ))}
     
    </div>
  )
}

export default TodoWrapper