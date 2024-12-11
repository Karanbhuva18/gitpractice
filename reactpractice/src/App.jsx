// src/App.jsx
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [tasks, setTasks] = useState(['Sample Task 1', 'Sample Task 2']);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <TodoList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
}

export default App;
