// src/components/TodoItem.jsx
import React, { useState } from 'react';

function TodoItem({ task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = () => {
    onEdit(editedTask);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleSave} className="save-button">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="cancel-button">
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className="task-text">{task}</span>
          <div>
            <button onClick={() => setIsEditing(true)} className="edit-button">
              Edit
            </button>
            <button onClick={onDelete} className="delete-button">
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
