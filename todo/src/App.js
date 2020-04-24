import React, { useReducer } from 'react';
import './App.css';
import {  TodoReducer, initialState } from './reducers/index.js'
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js'

export default function App() {
  const [state, dispatch] = useReducer(TodoReducer, initialState)
  return (
    <div>
      <TodoForm state={state} dispatch={dispatch}/>
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  );
}


