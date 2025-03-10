import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(req, { params }) {
  const id = Number(params.id);
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    return NextResponse.json(post);
  } catch (err) {
    console.log("Error fetching post", err);
    return false;
  }
}
