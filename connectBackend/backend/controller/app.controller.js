let userModel = require('../models/app.model');

let createUser = (req, res) => {
    try{
        let {name, email} = req.body;
        let userData = new userModel({
            Name: name,
            Email: email
        })
        userModel.insertMany(userData)
        .then((data) => {
            console.log('Created successfully');
            res.status(200).json(data);
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(error);
        })
    }
    catch(error){
        console.log(error);
        res.status(400).json(error);
    } 
}

module.exports = {createUser};