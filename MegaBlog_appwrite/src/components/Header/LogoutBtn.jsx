import React from 'react'
import {  useDispatch } from 'react-redux'
import authService from "../../appwrite/auth"
import {logout} from "../../store/authSlice"
function Logoutbtn() {
    const dispatch =useDispatch()

    const logouthandler=()=>{
        authService.Logout().then(()=>{
        dispatch(logout())
        })
    }

  return (
    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={logouthandler}>Logout</button>
  )
}

export default Logoutbtn