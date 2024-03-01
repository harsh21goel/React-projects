const mongoose =require("mongoose")


const connect= mongoose.connect("mongodb://127.0.0.1:27017/CrudWithReact")
.then(()=>{
    console.log("Database is successfully connected");
}).catch((err)=>{
  console.log(err);
})

module.exports=connect

