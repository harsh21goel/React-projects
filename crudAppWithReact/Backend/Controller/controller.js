const { then } = require("../Connection/connection");
let userModel = require("../Model/UserModel");

let page =(req,res)=>{
        res.send("Hello world!")
}

let Create =async (req, res) => {
  try {
    let { name, email, number } = req.body;
    let userdata = new userModel({
      Name: name,
      Email: email,
      Number: number,
    });
    await userModel
      .insertMany(userdata) 
      .then((data) => {
        console.log(data);
        res.json(data)
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};
let find = async (req,res)=>{
  try {
    let {email}=req.body
    await userModel
    .find({Email:email})
    .then((data) => {
        let user = data
        console.log(user)
        res.send(user)
      })
    .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
}
let update=async(req,res)=>{
  try {
    let {email,oldnumber,updatedno}=req.body;
    let user=await userModel.findOne({Email:email})
    // console.log(user)
    if(user.Number===oldnumber){
      let updatedUser=await userModel.findOneAndUpdate({Email:email},{Number:updatedno},{new:true});
      // console.log(updatedUser)
      res.json(updatedUser)
    }else{
      res.send("Your old number does not match")
    }
    
      
      
  } catch (error) {
    console.log(error)
  }
}
let dlt=async(req,res)=>{
  try {
    let {email}=req.body;
    let deletedUser =await userModel.findOneAndDelete({Email:email})
    if(! deletedUser){
      return res.status(404).send(`User with email ${email} not found`);
    }else{
      res.status(204).json("User deleted successfully");
    }

  } catch (error) {
    res.send("Not Deleted"+ error)
    console.error("Error deleting user:", error);
    
  }

 
}

module.exports ={
    Create,
    page,
    find,
    update,
    dlt
}
