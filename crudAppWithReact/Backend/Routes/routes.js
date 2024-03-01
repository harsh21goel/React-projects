let express =require ("express")
let route =express.Router()

let controller =require("..//Controller/controller")

route
.get("/",controller.page)
.get("/show",controller.find)
.post("/",controller.Create)
.put("/update",controller.update)
.delete("/delete",controller.dlt)


module.exports= route ;
