import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const revalidate = 0; // this is the new line added

export const GET = async (request) => {

    try{
        connectToDb();
        const posts= await Post.find();
        return NextResponse.json(posts);

    }
    catch(err){
        console.log(err);
        throw new Error("Failed to fetch posts");
    }

}