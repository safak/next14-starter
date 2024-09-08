import { NextResponse } from "next/server";
import connectMongoDB from "../../../../lib/mongodb";
import Blog from "../../../../models/blogModel";

export async function POST(req) {
  try {
    const {
      authorName,
      blogCategory,
      blogTitle,
      blogContent,
      blogImage,
      subTitle1,
      description1,
      subTitle2,
      description2,
    } = await req.json();

    console.log("Received data:", {
      authorName,

      blogCategory,
      blogTitle,
      blogContent,
      blogImage,
      subTitle1,
      description1,
      subTitle2,
      description2,
    });

    if (
      !authorName ||
      !blogCategory ||
      !blogTitle ||
      !blogContent ||
      !blogImage
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const blog = new Blog({
      authorName,

      blogCategory,
      blogTitle,
      blogContent,
      blogImage,
      subTitle1,
      description1,
      subTitle2,
      description2,
    });
    const savedBlog = await blog.save();

    return NextResponse.json({ id: savedBlog._id }, { status: 201 });
  } catch (error) {
    if (error.code === 11000) {
      console.error("Duplicate key error:", error);
      return NextResponse.json(
        { message: "Duplicate key error" },
        { status: 400 }
      );
    }

    console.error("Error in blog creation:", error);
    return NextResponse.json(
      { message: "Failed to create blog" },
      { status: 500 }
    );
  }
}
