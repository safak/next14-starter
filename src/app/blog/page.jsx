import PostCard from "@/shared/components/post-card/post-card";
import styles from "./blog.module.css";

const BlogPage = () => {
    return (
        <div className={styles.container}> 
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    );
}

export default BlogPage;