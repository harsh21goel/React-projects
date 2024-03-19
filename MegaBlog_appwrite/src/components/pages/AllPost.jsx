import React,{useState, useEffect} from 'react'
import appwritrService from "../../appwrite/conf"
import { Container,Postcard } from '../index';
function AllPost() {
    const [Posts, setPosts] = useState([]);
    useEffect(()=>{
        appwritrService.getAllPosts()
        .then((posts)=>{
            if (posts) {
                setPosts(posts.documents)
                // console.log("posts"+posts);
            }else{
                console.log("not getting posts");
            }
        }).catch((err)=>{
            console.log("  "+err);
        })
    },[])
    useEffect(()=>{
        console.log(Posts)
    },[Posts])
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {Posts.map((post)=>(
                        <div key={post.$id} className='p-2 w-1/4'>
                    {/* {console.log("post  "+post)} */}

                            <Postcard post={post.featured_image}/>
                        </div>   
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost