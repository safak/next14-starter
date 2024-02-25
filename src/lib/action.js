"use server"
import { revalidatePath } from "next/cache";
import { Post } from "./model";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";




export const addPost = async (formData) => {
    const { title, desc, slug, userId } = Object.fromEntries(formData);
    console.log(`${title}, ${desc}, ${slug}, ${userId}`);
    try {
        await connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });

        await newPost.save();
        revalidatePath("/blog")
        console.log("Saved to db")
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" };
    }
}


export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        revalidatePath("/blog")
        console.log("Deleted from db")
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" };
    }
}


export const handleGithubLogin = async () => {
    await signIn("github");
};


export const handleLogout = async () => {
    await signOut();
}