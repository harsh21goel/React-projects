import { useState,useEffect } from 'react'
import {TodoProvider} from "./contexts"
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [todos, settodos] = useState([])
  const addTodo =(todo)=>{
    settodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updateTodo =(id,todo)=>{
    settodos((prev)=>prev.map((prevtodo)=>(
      prevtodo.id===id ? todo : prevtodo
    )))
  }
  const removeTodo=(id)=>{
    settodos((prev)=>prev.filter((prevTodo)=>(prevTodo.id !==id)))
  }
  const ToggleComplete=(id)=>{
    settodos((prev)=>prev.map((todo)=> todo.id === id ? {...todo, completed:!todo.completed} :todo))
  }

  useEffect(() => {
    const todos =JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.lenght>0) {
      settodos(todos)
    }
  }, [])
  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
   
  }, [todos])
  

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,ToggleComplete,removeTodo}}>
    <div className='bg-[#41659b] min-h-screen py-8'>
      <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-[#5274a8]'>
        <h1 className='text-2xl font-bold  mb-8 mt-2'>Manage your Todos</h1>
        <div className='mb-4'>

        <TodoForm/>
        </div>
        <div className='flex flex-wrap gap-y-3'>

        {todos.map((todo)=>(
          <div className='w-full' key={todo.id}>
                <TodoItem todo={todo}/>
          </div>
        ))}
        </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App

