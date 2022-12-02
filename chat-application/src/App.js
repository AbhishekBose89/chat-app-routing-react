import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Login from "./Components/Login"
import Home from "./Components/Home"
import NotFound from "./Components/NotFound"
import InvalidAccess from "./Components/InvalidAccess"
import TodoList from './Components/TodoList'

function App() {

  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/invalidaccess' element={<InvalidAccess />} />
        <Route path='/todolist' element={<TodoList/>}/>
      </Routes>
    </div>
  );
}

export default App;
