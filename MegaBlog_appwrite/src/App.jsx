import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authservice  from './appwrite/auth'
import { login,logout } from './store/authSlice'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
function App() {
const [loading,setloading] = useState(true)
const dispatch=useDispatch()
useEffect(()=>{
  authservice.getCurrentUser()
  .then((userDAta)=>{
    if (userDAta) {
    dispatch(login({userDAta}))
    }else{
      dispatch(logout())
    }
  })
  .finally(()=>setloading(false));
},[])

  return !loading? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
         <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : (null)
}

export default App
