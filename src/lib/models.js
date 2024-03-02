import { Mongoose } from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new Mongoose.schema({
    username:{
        type:String,
        required:true,
        unique: true,
        min:3,
        max:20
    },
    email:{
        type:String,   
        required:true,
        unique: true,
        max:50
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    img:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},
{timestamps: true})

const postSchema = new Mongoose.schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,   
        required:true,
    },
    img:{
        type:String,
    },
    userId:{
        type: String,
        required: true,
    },
    slug:{
        type:String,
        required:true,
        unique:true,
    },
},
{timestamps: true})


export const User = Mongoose.models.User || Mongoose.model("User", userSchema)
export const Post = Mongoose.models.Post || Mongoose.model("Post", postSchema)