"use server";

import prisma from "../../../prisma/client";

//Getting posts should be done in via api, using server actions do not cache the data.

/* export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: { name: true, avatar: true },
        },
      },
    });

    return { success: true, data: posts };
  } catch (err) {
    console.log("Error fetching post", err);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}
 */

export async function createPost({ title, content, image, authorId }) {
  return await prisma.post.create({
    data: { title, content, image, authorId },
  });
}

export async function getPostById(id) {
  try {
    return await prisma.post.findUnique({
      where: { id },
    });
  } catch (err) {
    console.log("Error fetching post", err);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}
