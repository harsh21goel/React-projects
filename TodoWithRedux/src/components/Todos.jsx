import React,{useState }from 'react'
import {useDispatch,useSelector} from "react-redux"
import{deleteTodo} from "../features/todo/todoslice"

function Todos() {
     const todos=   useSelector(state=>state.todos)
     const dispatch=useDispatch()
  return (
    <>
      <div>Todos</div>
      <ul className='list-none'>
      {todos.map((todo)=>(
        <li key={todo.id} className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'>
            <div className='text-white'>{todo.text}</div>
            
            <button onClick={()=>dispatch(deleteTodo(todo.id))} className='text-white'>X</button>
        </li>
        
      ))}
      </ul>
    </>
  )
}

export default Todos