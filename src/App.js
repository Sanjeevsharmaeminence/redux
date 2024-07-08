// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store'; // Import your store
import Counter from './components/Counter'; // Import your counter component
import TodoList from './components/TodoList'; // Import your todo list component

const App = () => {
  return (
    <Provider store={store}>
      <div>
       {/* <>
        <h1>Counter</h1>
        <Counter />
        </> */}
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
