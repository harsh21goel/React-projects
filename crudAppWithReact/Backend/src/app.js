let express =require ("express")
let app = express()
let cors= require("cors")
let bodyParser=require("body-parser")
let connction =require("../Connection/connection")
let routes =require ("../Routes/routes")

app.use(bodyParser.json())
app.use("/",routes)


app.listen(3000,()=> {
    console.log("Backend is running on Port 3000");
})