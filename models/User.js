const mongoose = require('mongoose');

//data template for the database, or you can call it a layout
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },email:{
        type:String,
        require:true
    },address:{
        type:String,
        require:true
    },postalCode:{
        type:String,
        require:true
    },phoneNumber:{
        type:String,
        require:true
    },time:{
        type:String,
        require:true
    },date:{
        type:String,
        require:true
    },senderFname:{
        type:String,
        require:true
    },senderLname:{
        type:String,
        require:true
    },senderAddressOne:{
        type:String,
        require:true
    },senderAddressTwo:{
        type:String,
        require:true
    },senderPostalCode:{
        type:String,
        require:true
    },senderContact:{
        type:String,
        require:true
    },recipientFname:{
        type:String,
        require:true
    },recipientLname:{
        type:String,
        require:true
    },recipientAddressOne:{
        type:String,
        require:true
    },recipientAddressTwo:{
        type:String,
        require:true
    },recipientCityTown:{
        type:String,
        require:true
    },recipientProvince:{
        type:String,
        require:true
    },recipienCountry:{
        type:String,
        require:true
    },recipientContact:{
        type:String,
        require:true
    }
});


const User = mongoose.model('User',UserSchema);

module.exports = User;