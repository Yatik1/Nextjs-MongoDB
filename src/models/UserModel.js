import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
     username: {
        type: String,
        required: [true , "Please provide a username"] , 
        unique: true ,
     } , 

     email: {
        type: String,
        required: [true , "Please provide a username"] , 
        unique: true ,
     },

     password: {
        type: String, 
        required: [true , "Please provide a password"],
     },

     isVerified: {
        type : Boolean , 
        default: false,
     },

     isAdmin: {
        type: Boolean , 
        default: false, 
     },

     forgotPasswordToken : String, 
     forgotPasswordTokenExpiry : Date,
     verifyToken : String , 
     verifyTokenExpiry : Date,
})

//In nextjs we have to follow following procedure as mongodb as intial configured data model so to avoid the clash between two or multiple different model we can use this syntactic procedure
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;