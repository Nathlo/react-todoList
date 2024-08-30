import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import { v4 as uuidv4 } from "uuid";
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

  const deleteTodo = id => {
    // returning the ID's value when the ID is different from the ID passed in
    setTodos(todos.filter(todo => todo.id !== id) )
  }

  const editTodo = id => {
    setTodos( todos.map(todo => todo.id === id ? {
      ...todo, isEditing: !isEditing} : todo ))
    }

  const editTask = (task, id) => {
    setTodos( todos.map(todo => todo.id === id ? {...
      todo, task, isEditing: !todo.isEditing} : todo) )
  }

  return (
    <div className='TodoWrapper'>
      <h1>Tâches Faites !</h1>

        <TodoForm addTodo={addTodo} />

        {todos.map( (todo, index)  => (
          todo.isEditing ? (
            <EditTodoForm 
            editTodo={editTask} 
            task={todo} 
            key={index}  />
          ) : (
            <Todo 
              task={todo} 
              key={index} 
              toggleComplete={toggleComplete} 
              deleteTodo={deleteTodo} 
              editTodo={editTodo} />
          )

        ))}
     
    </div>
  );
}
export default TodoWrapper