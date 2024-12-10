// src/App.jsx
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useLocalStorage('todos', []);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add Task</button>

      <TodoList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
