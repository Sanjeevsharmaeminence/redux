// src/components/TodoItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../features/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <li onClick={handleToggle} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
    </li>
  );
};

export default TodoItem;
