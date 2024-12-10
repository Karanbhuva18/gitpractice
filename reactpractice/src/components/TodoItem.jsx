// src/components/TodoItem.jsx
import React from 'react';

function TodoItem({ task, onDelete }) {
  return (
    <li className="todo-item">
      {task}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
