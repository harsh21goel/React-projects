import React,{useState,useEffect} from 'react'
import { db,auth } from '../firebase/config'
import {getDocs,
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc
} from "firebase/firestore"

function MoviesList() {
const [movies, setmovies] = useState([])
const [title, settitle] = useState("")
const [year, setyear] = useState(0)
const [oscar, setoscar] = useState(false)
const [updatedtitle, setupdatedtle]=useState("")


const movieCollRef=collection(db,"movies")

const getMovies= async ()=>{
    try {
        const data= await getDocs(movieCollRef)
        const filtereddata= data.docs.map((doc)=>({
            ...doc.data(),
             id:doc.id
            }))
        // console.log(filtereddata);
        setmovies(filtereddata)
    } catch (error) {
        console.log(error);
    }
   
}
useEffect(()=>{
getMovies()
},[db,auth])


    const addmovie=async()=>{
        await addDoc(movieCollRef,{
            title:title,
            releaseDate:year,
            oscar:oscar,
            userId: auth?.currentUser?.uid
        })
        getMovies()
        settitle("")
        setyear("")
        setoscar(false)
    }
    const deletemovie= async(id)=>{

        const moviedoc=doc(db,"movies",id)
        await deleteDoc(moviedoc)
        getMovies()
    }
    const updatemovie= async(id)=>{

        const moviedoc=doc(db,"movies",id)
        await updateDoc(moviedoc,{title:updatedtitle})
        getMovies()
    }
  return (
    auth.currentUser !== null ? (
    <div>

    <div>
        <h1>Add Movie...</h1>
        <input type="text" placeholder='Enter title....' onChange={(e)=>settitle(e.target.value)} value={title
        }/>
        <input type="number" placeholder='Enter Released Year....' onChange={(e)=>setyear(Number(e.target.value))} value={year} />
        <label htmlFor="oscar">Received an Oscar</label>
        <input type="checkbox" id='oscar' 
        checked={oscar}
        onChange={(e)=>setoscar(e.target.checked)} />
        <button onClick={addmovie}>Add</button>
    </div>
    <br />
    <br />
    {
        
    }
    {movies.map((movie)=>(
        <div key={movie.title}>
        <h2  style={{color:movie.oscar?"green":"red", marginBottom:"0px"}}>{movie.title}</h2>
        <p style={{marginTop:"0px"}}>
            Released Date: {movie.releaseDate} &nbsp;
        <button onClick={()=>deletemovie(movie.id)} style={{color:"#fff"}}>X</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder='New title..' onChange={(e)=>setupdatedtle(e.target.value)} /> &nbsp;
        <button onClick={()=>updatemovie(movie.id)}>Update</button> 
        </p>
        </div>
    ))}
    </div>
    ):<p>Login to see movies</p>
  )
}

export default MoviesList
