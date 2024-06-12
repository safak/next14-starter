import { NextResponse } from "next/server";
import connectMongoDB from "../../../../lib/mongodb";
import Blog from "../../../../models/blogModel";

export async function GET(req) {
  try {
    await connectMongoDB();

    const blogs = await Blog.find();
    console.log("Fetched blogs:", blogs);

    return NextResponse.json(blogs); // Return data directly
  } catch (error) {
    console.error("Error in fetching blogs:", error);
    return NextResponse.json(
      { message: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
