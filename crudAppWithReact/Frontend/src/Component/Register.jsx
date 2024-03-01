import { useState } from "react"
import axios from "axios"
export default function Register() {
  const [name, setName] = useState("")
  const [email, setemail] = useState("")
  const [number, setnumber] = useState()

  const submit =()=>{
    console.log("submitted");
    axios.post("http://localhost:3000",{
      "name": name,
      "email":email,
      "number":number
    })
  }
  return (
    <div className='flex  max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mx-auto mt-8' >
      <form onSubmit={submit} method="post">
            
              <input type="text" placeholder='Enter your name' id="name"  className='inline-block rounded border-2 border-success px-4 pb-[6px] pt-2 text-md font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 mb-2' onChange={(e)=>{setName(e.target.value)}} />
              <input type="email" placeholder='Enter your email' id="email"  className='mb-2
               inline-block rounded border-2 border-success px-4 pb-[6px] pt-2 text-md font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10' onChange={(e)=>{setemail(e.target.value)}}/>
              <input type="number" placeholder='Enter your number' id="number"  className='mb-6
               inline-block rounded border-2 border-success px-4 pb-[6px] pt-2 text-md font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 ' onChange={(e)=>{setnumber(e.target.value)}}/>
               <br />
               <input type="submit" value="Register"            className="inline-block rounded border-2 border-success px-4 pb-[6px] pt-2 text-md font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-12"
 />
            
      </form>
    </div>
  )
}
