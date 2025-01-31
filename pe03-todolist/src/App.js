import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    setTodos(todos.filter((todo) => todo !== taskToDelete));
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTask(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
