import config from "../config/config"
import { Client,Databases,Storage,Query,ID } from "appwrite"


export class Service{
client=new Client()
database;
bucket; 

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)
        this.database=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }
    async createPost({title,content,featured_image,status,user_id,slug}){
        try {
           return await this.database.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featured_image,
                    status,
                    user_id,
                    
                }
            )
        } catch (error) {
            console.log("Appwrite service :: Createpost :: error ",error);
        }
    }

    async updatePost(slug,{title,content,featured_image,status,user_id}){
        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featured_image,
                    status,
                    
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error ",error);
            
        }
    }
    async Deletepost({slug}){
        try {
            await this.database.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: Deletepost :: error ",error);
            return false
        }
    }
    async getPost({slug}){
        try {
            return await this.database.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error ",error);
            return false;
        }
    }
    async getAllPosts(queries=[Query.equal("status", "active")]){
        try {
           return await this.database.listDocuments(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            queries
           )
        } catch (error) {
            console.log("Appwrite Service :: getAllPosts :: error: " + error);4
            return false;
        }
    }


    //upload file services
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID,unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error: " + error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error: " + error);
            return false;
        }
    }

    async getFilepreview(fileId){
        await this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    
    }


}
const service=new Service()

export default service