import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList.js';
import uuid4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = todoApp.todos

function App() {
  //Sets the initial state (no todos) and a function to change the state
  const [todos, setTodos] = useState([])
  //Allows referencing of html elements
  const todoNameRef = useRef()

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') {return}
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
    })
    todoNameRef.current.value = null
  }

  //Fragment containing several elements. Only one thing can be returned by a function
  return (
    <> 
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type='text'/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear completed todos</button>
      <div>0 left todo</div>
    </>
  );
}

export default App;
