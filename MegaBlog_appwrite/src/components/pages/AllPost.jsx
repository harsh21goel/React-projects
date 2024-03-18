import React,{useState, useEffect} from 'react'
import appwritrService from "../../appwrite/conf"
import { Container,Postcard } from '../index';
function AllPost() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        appwritrService.getAllPosts([])
        .then((posts)=>{
            if (posts) {
                setPosts(posts.documents)
            }else{
                console.log("not getting posts");
            }
        }).catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                        <div key={post.$id} className='p-2 w-1/4'>
                            <Postcard post={post}/>
                        </div>   
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost