// Mock data from the db

const users = [
  { id: 1, name: "Terry Jefferson", img: "/blog3.jpg" },
  { id: 2, name: "John Doe", img: "/blog2.jpg" },
  { id: 3, name: "Jane Doe", img: "/blog1.jpg" },
];

const posts = [
  {
    id: 1,
    userId: 1,
    title: "Post 1",
    body: "This is post 1",
    img: "/blog1.jpg",
  },
  {
    id: 2,
    userId: 2,
    title: "Post 2",
    body: "This is post 2",
    img: "/blog2.jpg",
  },
  {
    id: 3,
    userId: 3,
    title: "Post 3",
    body: "This is post 3",
    img: "/blog3.jpg",
  },
];

export const getPosts = async () => {
  return posts;
};

export const getUsers = async () => {
  return users;
};

export const getSinglePost = async (id) => {
  return posts.find((post) => post.id === id);
};

export const getSingleUser = async (id) => {
  return users.find((user) => user.id === id);
};
