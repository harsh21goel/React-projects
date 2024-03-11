import React,{useCallback} from 'react'
import {useForm} from "react-hook-form"
import {Button,Input,RTE} from "../index"
import { useNavigate } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import appwriteService from "../../appwrite/conf"

function PostForm({post}) {
    const {register,handleSubmit,watch,setValue,control,getValues}=useForm({
    defaultValues:{
        title: post?.title ||"",
        slug: post?.slug ||"",
        content: post?.content ||"",
        status: post?.status ||"active",
    }
    })
    const navigate=useNavigate()
    const userData=useSelector(state=>state.user.userData)

    const submit=async(data)=>{
        if (post) {
         const file=   data.image[0] ? appwriteService.uploadFile(data.image[0]): null
         if (file) {
            appwriteService.deleteFile(post.featured_image)
         }
         const dbPost=await appwriteService.updatePost(post.$id,{
            ...data,
            featured_image: file? file.$id : undefined,
            
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
         })
        }else{
            const file=   appwriteService.uploadFile(data.image[0])
            if(file){
              const fileid=  file.$id
              data.featured_image=fileid
              await appwriteService.createPost({
                ...data,
                  user_id:userData.$id,
              })
              if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
              }
            }

        }
    }
    const slugTransform=useCallback((value) =>{
        if (value && value==="string") 
            return value
            .trim() 
            .toLowercase()
            .replace(/^[a-zA-Z\d\s]+/g,'-')
            .replace(/\s/g,'-')

        return ""
    },[])

    React.useEffect(()=>{
        const subscription =watch((value,{name})=>{
            if (name==="title") {
                setValue("slug",slugTransform(value.title,{shouldValidate:true}))
            }
        })

        return ()=>{
            subscription.unsubscribe()
        }
    
    },[watch,slugTransform,setValue])
  return (
    <form onSubmit={handleSubmit(submit)} className=' flex flex-wrap'>
        <div className='w-2/3 px-2'>
            <Input 
            label="Title :"
            placeholder='Title'
            className='mb-4'
            {...register("title",{required: true})}
            />
            <Input 
            label="Slub :"
            placeholder='luug'
            className='mb-4'
            {...register("slug",{required: true})}
            onInput={(e)=>{
                setValue("slug",slugTransform(e.currentvalue.value),{
                    shouldValidate:true
                })
            }}
            />
            <RTE label="Conttent" name="content" control={control}
            defaultValue={getValues("content")} />
        </div>
        <div className=' w-1/3 px-2 '>
            <Input
                label="Featured Image"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg , image/jpeg, image/gif"
                {...register("image",{required:!post})}
            />
            {post && (
                 <div className='w-full mb-4'>
                    <img src={appwriteService.
                    getFilepreview(post.featured_image)} 
                    alt={post.title}
                    className='rounded-lg'
                    />
                </div>
            )}
                <Select
                    options={["active","inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status",{required:true})}
                />
            <Button type='submit' bgColor={post? bg-green-500:undefined}
            className='w-full'>{post? Update:Submit}</Button>
        </div>
       
    </form>
  )
}

export default PostForm