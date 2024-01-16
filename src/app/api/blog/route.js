import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/util";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const POST_PER_PAGE = 6;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
  };

  try {
    connectToDb();
    const posts = await Post.find()
      .skip(query.skip)
      .limit(query.take)
      .then((posts) => {
        return posts;
      })
      .catch((err) => {
        console.error(err);
      });

    const count = await Post.countDocuments({});

    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};
