import { User } from "@/lib/models";
import { connectToDb } from "@/lib/util";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const POST_PER_PAGE = 4;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
  };

  try {
    connectToDb();
    let usersQuery = User.find().skip(query.skip).limit(query.take);

    if (!searchParams || searchParams.toString() === "") {
      usersQuery = User.find();
    }

    const users = await usersQuery
      .then((users) => {
        return users;
      })
      .catch((err) => {
        console.error(err);
      });

    const count = await User.countDocuments({});
    return new NextResponse(JSON.stringify({ users, count }, { status: 200 }));
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};
