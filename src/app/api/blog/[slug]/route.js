import { Post } from "@/shared/lib/models";
import { connectToDb } from "@/shared/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request,{params}) => {
    const { slug } = params;
    try{
        connectToDb();
        const post = await Post.findOne({slug});
        return NextResponse.json(post);
    }
    catch(err){
        console.log(err);
        throw new Error("Internal Server Error");
    }   
}

