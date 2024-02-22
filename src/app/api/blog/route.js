import { Post } from "@/shared/lib/models";
import { connectToDb } from "@/shared/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
    try{
        connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts);
    }
    catch(err){
        console.log(err);
        throw new Error("Internal Server Error");
    }   
}

