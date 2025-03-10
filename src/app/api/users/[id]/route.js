import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(req, { params }) {
  const id = Number(params.id);
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { posts: { select: { createdAt: true, id: true } } },
    });
    return NextResponse.json(user);
  } catch (err) {
    console.log("Error fetching post", err);
    return false;
  }
}
