// src/components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, onDelete }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
}

export default TodoList;
