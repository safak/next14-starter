import styles from "./blog.module.css";
import PostCard from "../../components/postCard/postCard.jsx";
// import { getPosts } from "@/lib/data";

//API data fetch
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export const metadata = {
  title: "Blog Page",
  description: "Blog Description",
};

const BlogPage = async () => {
  // const posts = await getPosts();
  const posts = await getData();
  // console.log(posts);
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
