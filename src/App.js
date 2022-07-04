import React from 'react';
import TodoList from './TodoList.js';

function App() {
  return (
    <>
      <TodoList />
      <input type='text'/>
      <button>Add Todo</button>
      <button>Clear completed todos</button>
      <div>0 left todo</div>
    </>
  );
}

export default App;
