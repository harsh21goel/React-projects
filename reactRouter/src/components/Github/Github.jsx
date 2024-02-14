import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data= useLoaderData()
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/harsh21goel')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         // console.log(data);
    //         setdata(data);
    //     })
    // },[])
  return (
    <div className=' text-center m-5 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img className='flex justify-center' src={data.avatar_url} alt="GitPicture" />
    </div>
  )
}

export default Github

 export const gitInfo= async()=>{
   const res= await fetch('https://api.github.com/users/harsh21goel')
   return res.json()

}