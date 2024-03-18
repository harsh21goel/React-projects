import conf from "../config/config"
import { Client,Databases,Storage,Query,ID } from "appwrite"


export class Service{
client=new Client() 
database;
bucket; 

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.database=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }
    async createPost({title,content,featured_image,status,slug}){
        try {
           return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featured_image,
                    status,
                    // user_id,
                    
                }
            )
        } catch (error) {
            console.log("Appwrite service :: Createpost :: error ",error);
        }
    }

    async updatePost(slug,{title,content,featured_image,status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
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
    async deletepost({slug}){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: Deletepost :: error ",error);
            return false
        }
    }
    async getPost(slug){
        try {
        //   console.log("getposr"+slug);
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
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
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
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
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error: " + error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
             await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } 
        catch (error) {
            console.log("Appwrite Service :: deleteFile :: error: " + error);
            return false;
        }
    }

     getFilepreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    
    }


}
const service=new Service()

export default service