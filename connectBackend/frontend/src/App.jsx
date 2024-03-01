import { useState, useEffect } from 'react'
import Axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const handleSubmit = () => {
    Axios.post('http://localhost:4300/', {
      name: Name,
      email: Email,
    })
  }
  return (
    <>
      <form onSubmit = {handleSubmit}>
        <label htmlFor="">Name:</label>
        <input type="text" onChange = {(e) => {setName(e.target.value)}} />
        <label htmlFor="">Email:</label>
        <input type="email"  onChange = {(e) => {setEmail(e.target.value)}}/>
        <input type="submit" value="Submit"/>
      </form>
    </>
  )
}

export default App
