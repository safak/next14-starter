"use server";

import prisma from "../../../prisma/client";

//Getting users should be done in via api, using server actions do not cache the data.

/* export async function getUsers() {
  try {
    return await prisma.user.findMany();
  } catch (err) {
    console.log("Error fetching post", err);
    return false;
  } finally {
    await prisma.$disconnect();
  }
} */

export async function createUser(email, name, avatar) {
  return await prisma.user.create({
    data: { email, name, avatar },
  });
}

export async function getUserById(id) {
  try {
    return await prisma.user.findUnique({
      where: { id },
      include: { posts: { select: { createdAt: true } } },
    });
  } catch (err) {
    console.log("Error fetching post", err);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}
