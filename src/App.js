import React, { useState } from 'react';
import TodoList from './TodoList.js';

function App() {
  //Sets the initial state (no todos) and a function to change the state
  const [todos, setTodos] = useState(['task 1','task 2'])
  //Fragment containing several elements. Only one thing can be returned by a function
  return (
    <> 
      <TodoList todos={todos}/>
      <input type='text'/>
      <button>Add Todo</button>
      <button>Clear completed todos</button>
      <div>0 left todo</div>
    </>
  );
}

export default App;
