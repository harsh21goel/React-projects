import { useState } from 'react'

import './App.css'
import AddToDo from './components/AddToDo'
import Todos from './components/Todos'
function App() {

  return (
    <>
    <AddToDo/>
    <Todos/>
    </>
  )
}

export default App
