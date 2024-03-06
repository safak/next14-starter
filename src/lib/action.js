"use server"
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {


//    const title = formData.get("title");
//    const desc = formData.get("desc");
//    const slug = formData.get("slug");

const { title, desc, slug, userId } = Object.fromEntries(formData);

   try {
    connectToDb()
    const newPost = new Post({
        title,
        desc,
        slug,
        userId,
    });

    await newPost.save();
    console.log("Saved to db")
    revalidatePath("/blog");
   }catch(err){
    console.log(err)
    return {error: "Something went wrong!"}
   }
}

export const deletePost = async (formData) => {
  
 
 const { id } = Object.fromEntries(formData);
 
    try {
     connectToDb()
 
     await Post.findByIdAndDelete(id);
     console.log("deleted from db")
     revalidatePath("/blog");
    }catch(err){
     console.log(err)
     return {error: "Something went wrong!"}
    }
 }
 
 