import PostCard from "@/shared/components/post-card/post-card";
import styles from "./blog.module.css";
import { getPosts } from "@/shared/lib/data";

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