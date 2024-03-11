import {useState,useEffect} from 'react'
import  appwriteService from "../../appwrite/conf"
import { Container,Postcard } from '../index';

function Home() {
    const [posts,setPosts] = useState([])
    useEffect(() =>{
        appwriteService.getAllPosts().then((posts)=>{
            if (posts) {
                setPosts(posts.documents)
            }
        })
    },[])
    if (posts.length===0) {
        return <Container>
            <div className='flex flex-wrap'>
                <div className='p-2 w-full'>
                    <h1 className='text-2xl font-bold hover:text-gray-500'>
                        Login to read posts
                    </h1>
                </div>
            </div>

        </Container>
    }
    return (
        <Container>
            <div className='w-full py-8'>
            <div className='flex flex-wrap'>
                {posts.map((post)=>{
                    <div className='w-1/4 p-2' key={post.$id}>
                        <Postcard post={post}/>
                    </div>
                })}
            </div>
            </div>
            </Container>
        )
        
    
 
}

export default Home