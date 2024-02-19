import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    img: {
        type: String,
        default: ""
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},{timestamps: true});

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    img: {
        type: String,
    },
    slug: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    }
},{timestamps: true});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);