import { useState } from 'react'
import './App.css'
import './Css/TodoCreate.css'
import TodoCreate from './Components/TodoCreate'
import Todo_List from './Components/Todo_List'

function App() {
  return (
    <>
      <TodoCreate />
      <Todo_List />
    </>
  )
}

export default App
