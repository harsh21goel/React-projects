import conf from "../config/config"
import { Client,Account,ID } from "appwrite"

export class Authservice {
    Client=new Client()
    account;

    constructor(){
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account=new Account(this.Client)
    }
    async CreateAccount({email,password,name}){
        try {
         const  UserAccount= await this.account.create(ID.unique(),email,password,name)
         if (UserAccount) {
            // call login method
            console.log(UserAccount);
            await this.Login({ email, password });
         } else {
            return UserAccount
         }
        } catch (error) {
            throw error;
        }
    }

    async Login({email,password}){
        try {
          return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            
            return  await this.account.get()
        } catch (error) {
            console.error("Appwrite service:: getCurrentUser :: error ",error);
        }
        return null;
    }

    async Logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service:: Logout :: error ",error);
        }
    }

}

const authservice =new Authservice()

export default authservice;