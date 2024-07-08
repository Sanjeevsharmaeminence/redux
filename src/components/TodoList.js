// src/components/TodoList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setFilter } from '../features/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.filter);

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>

      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
        <button onClick={() => dispatch(setFilter('incomplete'))}>Incomplete</button>
      </div>

      <ul>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
