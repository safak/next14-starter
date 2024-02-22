"use server";

import { connectToDb } from "./utils";
import {Post} from "./models";
import { revalidatePath } from "next/cache";

export const addPost = async (formData) => {
    try{
        connectToDb();
        const { title, description, slug, userId } = Object.fromEntries(formData)
        const post = new Post({title, description, slug, userId});
        await post.save();
        revalidatePath("/blog");
        return {status: 201, body: "Post added successfully"}
    }
    catch(err){
        console.log(err)
        return {status: 500, body: "Internal Server Error"}
    }
    
}

export const deletePost = async (formData) => {
    try{
        connectToDb();
        const { id } = Object.fromEntries(formData)
        await Post.findByIdAndDelete(id);
        revalidatePath("/blog");
        return {status: 201, body: "Post deleted successfully"}
    }
    catch(err){
        console.log(err)
        return {status: 500, body: "Internal Server Error"}
    }
    
}