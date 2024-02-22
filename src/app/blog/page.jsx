import PostCard from "@/shared/components/post-card/post-card";
import styles from "./blog.module.css";
import { getPosts } from "@/shared/lib/data";

export const metadata = {
  title: "Blog Page",
  description: "A few posts about my project!",
};

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