"use server";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import prisma from "../../../prisma/client";

const JWT_SECRET = process.env.JWT_SECRET;

export async function registerUser(prevState, formData) {
  try {
    const { name, email, password, passwordAgain } =
      Object.fromEntries(formData);

    if (!name) {
      return { error: "Name is required" };
    }

    if (!email) {
      return { error: "Email is required" };
    }

    if (password !== passwordAgain) {
      return { error: "Passwords do not match" };
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { error: "User already exists!" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
      },
    });

    return { success: "User registered successfully!" };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
}

export async function loginUser(prevState, formData) {
  const { email, password } = Object.fromEntries(formData);

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return { error: "User not found!" };

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return { error: "Invalid credentials!" };

  const token = jwt.sign({ userId: user.id, email }, JWT_SECRET, {
    expiresIn: "1d",
  });

  cookies().set("token", token, { httpOnly: true });

  return { success: "Logged in successfully!" };
}

export async function logoutUser() {
  cookies().delete("token");
  return { success: "Logged out successfully!" };
}

// Get Authenticated User
export async function getUser() {
  const token = cookies().get("token")?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true },
    });
  } catch (err) {
    console.log(err);
    return null;
  }
}
