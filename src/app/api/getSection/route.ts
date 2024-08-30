// pages/api/getBlogs.js
import connectMongoDB from "../../../../lib/mongodb";
import Blog from "../../../../models/blogModel";

export async function GET(req) {
  await connectMongoDB();

  const { searchParams } = new URL(req.url);
  const blogCategory = searchParams.get("blogCategory");

  try {
    const blogs = blogCategory
      ? await Blog.find({ blogCategory: blogCategory })
      : await Blog.find();

    return new Response(JSON.stringify(blogs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
