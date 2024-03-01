let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    Name: {type:String, required:true},
    Email: {type:String, required:true}
})

let model = new mongoose.model('model',userSchema, 'User');

module.exports = model;
