import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [username, setUsername] =useState("")
    const [password, setpassword] =useState("")
    const {setUser} =useContext(UserContext)
    const handlesubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="text" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default Login