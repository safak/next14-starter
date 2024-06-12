import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../lib/mongodb";
import Blog from "../../../../../models/blogModel";

type Params = {
  id: string;
};

export async function GET(req: Request, { params }: { params: Params }) {
  await connectMongoDB();
  const blog = await Blog.findById(params.id);
  if (!blog) {
    return NextResponse.next();
  }
  return NextResponse.json(blog);
}
