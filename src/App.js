import React, { useState } from 'react';
import TodoList from './TodoList.js';

function App() {
  //Sets the initial state (no todos) and a function to change the state
  const [todos, setTodos] = useState([{id: 1, name: "task 1", complete: true}])
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
