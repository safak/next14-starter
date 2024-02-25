import { Post } from "@/lib/model";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, response) => {

    try {
        connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch posts!");
    }
}