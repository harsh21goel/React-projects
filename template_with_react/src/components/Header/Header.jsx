import React from 'react'
import {Link} from "react-router-dom"
function Header() {
  return (
    <>
    <header>
        <div className=' w-full h-24 text-black  flex'>
          
           <div className='w-1/4  bg-white p-7 flex justify-center'> 
            <h1 className='text-2xl font-bold'>Edusmart</h1>
            </div>
            <nav className='w-3/4  flex justify-end p-8 text-sm'>
          <Link className='pr-14' to="/">Home</Link>
          <Link className='pr-14' to="about">About</Link>
          <a href="" className='pr-14'>BLOG</a>
          <a href="" className='pr-14'>CONTACT</a>
          <a href="" className='pr-14'>H</a>
        </nav>
        </div>
        

    </header>    
    </>
  )
}

export default Header