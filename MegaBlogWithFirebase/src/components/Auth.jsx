import React ,{useState}from 'react'
import {createUserWithEmailAndPassword,signInWithPopup,signOut,signInWithEmailAndPassword} from "firebase/auth"
import { auth } from '../firebase/config'
export default function Auth() {
const  [email, setemail] = useState("")
const [pass, setpass] = useState("")


const signup=async ()=>{
   try {
    await createUserWithEmailAndPassword(auth, email,pass)
    setemail("")
    setpass("")
   } catch (error) {
    console.log(error);
   }
}
// const google=async ()=>{
//     try {
//     await signInWithPopup(auth,googleprovider)
        
//     } catch (error) {
//         console.log(error);
//     }
// }
const logout=async ()=>{
    try {
    await signOut(auth)
        
    } catch (error) {
        console.log(error);
    }

}
const login=async ()=>{
    try {
    await signInWithEmailAndPassword(auth, email,pass)
    setemail("")
    setpass("")
        
    } catch (error) {
        console.log(error);
    }
}
// console.log(auth?.currentUser?.email);
// console.log(auth?.currentUser?.photoURL);

  return (
      <>
      <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='Enter your email' value={email}/>
      <input type="password" onChange={(e)=>setpass(e.target.value)} placeholder='Enter your password'value={pass} />
      <button onClick={signup}>Sign up</button>
      <button onClick={login}>log in</button>
      {/* <button onClick={google}>Log in with google</button> */}
      <button onClick={logout}>LogOut</button>
      </>
      )
      
  }