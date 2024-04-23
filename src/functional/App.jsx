import React, { useEffect, useReducer, useState } from 'react';

import Input from './Input';
import List from './List';
import { TodoReducer, initialState } from './todos.reducer';
import SearchBar from './SearchBar';


const LOAD_STATE = 'LOAD_STATE';
const SAVE_STATE = 'SAVE_STATE';



export default function App() {
  let [state, dispatch] = useReducer(TodoReducer, initialState);

  let { todos, editData } = state;
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const savedState = localStorage.getItem('todoState');
    
    if (savedState) {
      dispatch({ type: LOAD_STATE, payload: JSON.parse(savedState) });
    }
  }, []);

  const addTodo = (value) => {
    dispatch({ type: 'ADD_TODO', payload: value });
    saveStateToLocalStorage(); 
  };

  const deleteTodo = (value) => {
    dispatch({ type: 'DELETE_TODO', payload: value });
    saveStateToLocalStorage(); 
  };

  const editTodo = (index, value) => {
    dispatch({ type: 'EDIT_TODO', payload: { index, value } });
  };

  const updateTodo = (index, value) => {
    dispatch({ type: 'UPDATE_TODO', payload: { index, value } });
    saveStateToLocalStorage(); 
  };

  const saveStateToLocalStorage = () => {
    localStorage.setItem('todoState', JSON.stringify(state));
  };

  const handleSearch = (term) => {
    const filtered = todos.filter((todo) =>
      todo.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTodos(filtered);
  };

  return (
    
      <div className='container mt-4'>
        <Input addTodo={addTodo} editData={editData} updateTodo={updateTodo} />
        <SearchBar onSearch={handleSearch} />
        <List todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
    
  );
}

