const { truncate } = require('fs');
const mongoose = require('mongoose');

const customer = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },

    Email:{
        type:String,
        required:true
    },

    Password:{
        type:String,
        required:true
    }

    
});

module.exports = mongoose.model('Customer',customer);



