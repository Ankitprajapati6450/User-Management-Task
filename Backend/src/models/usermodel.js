const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : [true, "Name is required"],
        trim : true,
        minlength : [2 , "Name must be atleast 2 characters"],
        maxlength : [50 , "Name cannot exceed 50 characters"],
    },
    email : {
        type : String,
        required : [true, "Email is required"],
        unique : true,
        trim : true,
        lowercase : true,
        match : [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email is Invalid"],
    },
    age : {
        type : Number,
        required : [true, "Age is required"],
        minlength : [1 , "Age must be atleast 1"],
        maxlength : [120 , "Age cannot exceed 20"],
    }
}, {
    timestamps : true,
});

module.exports = mongoose.model("User", userSchema)

