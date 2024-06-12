// import { NextResponse } from "next/server";
// import connectMongoDB from "../../../../lib/mongodb";
// import Blog from "../../../../models/blogModel";

// export async function POST(req) {
//   try {
//     const {
//       authorName,
//       publishDate,
//       blogCategory,
//       blogTitle,
//       blogContent,
//       blogImage,
//     } = await req.json();
//     console.log("Received data:", {
//       authorName,
//       publishDate,
//       blogCategory,
//       blogTitle,
//       blogContent,
//       blogImage,
//     });

//     if (
//       !authorName ||
//       !publishDate ||
//       !blogCategory ||
//       !blogTitle ||
//       !blogContent ||
//       !blogImage
//     ) {
//       return NextResponse.json(
//         { message: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     await connectMongoDB();

//     const blog = new Blog({
//       authorName,
//       publishDate,
//       blogCategory,
//       blogTitle,
//       blogContent,
//       blogImage,
//     });

//     const res = await blog.save();
//     console.log("Created blog entry:", res);

//     return NextResponse.json({ id: res._id }, { status: 201 });
//   } catch (error) {
//     if (error.code === 11000) {
//       console.error("Duplicate key error:", error);
//       return NextResponse.json(
//         { message: "Duplicate key error" },
//         { status: 400 }
//       );
//     }

//     console.error("Error in blog creation:", error);
//     return NextResponse.json(
//       { message: "Failed to create blog" },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import connectMongoDB from "../../../../lib/mongodb";
import Blog from "../../../../models/blogModel";

export async function POST(req) {
  try {
    const {
      authorName,
      publishDate,
      blogCategory,
      blogTitle,
      blogContent,
      blogImage,
    } = await req.json();

    console.log("Received data:", {
      authorName,
      publishDate,
      blogCategory,
      blogTitle,
      blogContent,
      blogImage,
    });

    // Ensure all required fields are present
    if (
      !authorName ||
      !publishDate ||
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

    // Save the blog entry to the database
    const blog = new Blog({
      authorName,
      publishDate,
      blogCategory,
      blogTitle,
      blogContent,
      blogImage,
    });

    const savedBlog = await blog.save();
    console.log("Created blog entry:", savedBlog);

    return NextResponse.json({ id: savedBlog._id }, { status: 201 });
  } catch (error) {
    // Handle specific errors
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
