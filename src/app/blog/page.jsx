import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";


const getData = async () => {
  const req = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!req.ok) {
    throw new Error("data BlogPage error");
  }
  return req.json();
};

async function BlogPage() {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id} >
          <PostCard post={post}  />
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
