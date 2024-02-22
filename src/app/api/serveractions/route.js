import { Post } from "@/shared/lib/models";
import { connectToDb } from "@/shared/lib/utils";
import { NextResponse } from "next/server";

export const DELETE = async (request,{params}) => {
    try{
        connectToDb();
        await Post.deleteOne({params});
        return NextResponse.json("Post Deleted");
    }
    catch(err){
        console.log(err);
        throw new Error("Internal Server Error");
    }   
}

