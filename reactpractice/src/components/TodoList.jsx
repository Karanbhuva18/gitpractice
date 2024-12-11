// src/components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, onDelete, onEdit }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          onDelete={() => onDelete(index)}
          onEdit={(editedTask) => onEdit(index, editedTask)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
