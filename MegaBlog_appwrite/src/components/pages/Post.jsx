import {useState,useEffect} from 'react'
import  appwriteService from "../../appwrite/conf"
import { Container,Button } from '../index';
import { Link,useNavigate,useParams } from 'react-router-dom';
import  parse  from 'html-react-parser';
import {  useSelector } from 'react-redux';

function Post() {
const [post, setpost] = useState(null)
const {slug}=useParams()
const navigate = useNavigate()

const userData=useSelector((state)=>state.auth.userData)
console.log("userdata   "+userData);
const isAuthor=post && userData? post.userId === userData.$id: false
console.log("ssssss"+isAuthor);
useEffect(()=>{
    if (slug) {
        appwriteService.getPost(slug).then((post)=>{
            if (post) {
                setpost(post)
            }else navigate("/")
        })
    }else navigate("/")
},[slug,navigate])

const deletePost=()=>{
    appwriteService.deletePost(post.$id).then((status)=>{
        if (status) {
            appwriteService.deleteFile(post.featured_image)
            navigate("/")
        }
    })
}


  return post ? (
    <div className='py-8'>
        <Container>
            <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
                <img src={appwriteService.getFilepreview(post.featured_image)} alt={post.title} className='rounded-xl h-16 w-full'/>
                {isAuthor && (
                    <div className='absolute right-6 top-6'>
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button bgColor='bg-green-500' className='mr-3'>
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor='bg-red-500' onClick={deletePost}>
                            Delete
                        </Button>
                    </div>
                )}
            </div>
            <div className='w-full mb-6'>
                <h1 className='text-2xl font-bold'>{post.title}</h1>
            </div>
            <div className='browser-css'>{parse(post.content)}</div>
        </Container>
    </div>
  ):null
}

export default Post