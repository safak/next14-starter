import { Post, User } from "./model";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
// TEMPORARY DATA2
// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' }
// ]



// const posts = [
//     { id: 1, title: 'Post 1', body: '.....', userId: 1 },
//     { id: 2, title: 'Post 1', body: '.....', userId: 1 },
//     { id: 3, title: 'Post 1', body: '.....', userId: 2 },
//     { id: 4, title: 'Post 1', body: '.....', userId: 2 }
// ];

export const getPosts = async () => {
    noStore();
    try {
        connectToDb()
        const posts = await Post.find()
        return posts
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts!")
    }
}

export const getPost = async (slug) => {
    noStore();
    try {
        connectToDb()
        const post = await Post.findOne({ slug });
        return post
    } catch (error) {
        throw new Error("Failed to fetch post!")
    }
}

export const getUser = async (id) => {
    noStore();
    try {
        connectToDb();
        const user = await User.findById(id)
        return user
    } catch (error) {
        throw new Error("Failed to fetch user!")
    }
}

export const getUsers = async () => {
    noStore();
    try {
        connectToDb();
        const users = await User.find()
        return users
    } catch (error) {
        throw new Error("Failed to fetch users!")
    }
}