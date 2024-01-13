import { Post, User } from "./models";
import { connectToDb } from "./util";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//   { id: 1, username: "John" },
//   { id: 2, username: "Jane" },
// ];
// const posts = [
//   { id: 1, title: "Post 1", body: "......Body 1", userId: 1 },
//   { id: 2, title: "Post 2", body: "......Body 2", userId: 1 },
//   { id: 3, title: "Post 3", body: "......Body 3", userId: 2 },
//   { id: 4, title: "Post 4", body: "......Body 4", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
