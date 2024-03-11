import React,{useState} from 'react'
import authservice from '../appwrite/auth'
import { Link,Navigate,useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import {Button,Input,Logo} from "./index"
import { useDispatch } from 'react-redux'
import {useForm} from "react-hook-form"

function Signup() {
    const navigate =useNavigate()
    const dispatch =useDispatch()
    const {register,handleSubmit} = useForm()
    const [error, seterror] = useState("")

    const create =async (data)=>{
        seterror("")
        try {
            const userData=await authservice.CreateAccount(data)
            if(userData){
                const userData = await authservice.getCurrentUser()
                if (userData) {
                    dispatch(login(userData))
                    navigate("/")
                }
            }
        } catch (error) {
            seterror(error.message)
        }
    }
  return (
    <div className='flex item-center justify-center'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border 
        border-black/10`}>
                 <div className='mb-2 flex justify-center'>
        <span className='inline-block w-full max-w-[100px]'>
            <Logo width="100%"/>
            </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already hav an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign up
          </Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'>
           {error} </p>}
           <form onSubmit={handleSubmit(create)}>
            <div className='space-y-5'>
                <Input
                label="Name"
                placeholder="Enter your full name"
                {...register("name",{
                    required:true
                })}
                />
                 <Input
              type="email"
              label="Email:"
              placeholder="Enter your email address"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="password:"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
            </div>
           </form>
        </div>
    </div>
  )
}

export default Signup