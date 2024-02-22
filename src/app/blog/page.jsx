import PostCard from "@/shared/components/post-card/post-card";
import styles from "./blog.module.css";
//import { getPosts } from "@/shared/lib/data";

export const metadata = {
  title: "Blog Page",
  description: "A few posts about my project!",
};

const getPosts = async () => {
  const res = await fetch("http://localhost:3000/api/blog",{next: {revalidate: 3600}});

  if(!res.ok){
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

const BlogPage = async () => {
    const posts = await getPosts();
    return (
        <div className={styles.container}> 
           {
            posts.map((post) => (
              <div key={post.id} className={styles.post}>
                <PostCard  post={post} />
              </div>
            ))  
           }
        </div>
    );
}

export default BlogPage;