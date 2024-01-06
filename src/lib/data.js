// TEMPORARY DATA
const users = [
  { id: 1, username: "John" },
  { id: 2, username: "Jane" },
];

const posts = [
  { id: 1, title: "Post 1", body: "......Body 1", userId: 1 },
  { id: 2, title: "Post 2", body: "......Body 2", userId: 1 },
  { id: 3, title: "Post 3", body: "......Body 3", userId: 2 },
  { id: 4, title: "Post 4", body: "......Body 4", userId: 2 },
];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  return posts.find((posts) => posts.id === parseInt(id));
};

export const getUser = async (id) => {
  return users.find((user) => user.id === parseInt(id));
};
