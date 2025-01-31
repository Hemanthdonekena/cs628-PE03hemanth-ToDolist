import React, { useState } from 'react';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);  // State for the list of todos
  const [input, setInput] = useState('');  // State for the input field

  const addToDo = () => {
    if(input) {
      setTodos([...todos, input]);  // Add the new todo to the list
      setInput('');  // Reset the input field
    }
  };

  const deleteToDo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));  // Remove the todo at the given index
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addToDo}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteToDo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
