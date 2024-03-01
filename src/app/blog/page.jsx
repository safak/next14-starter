import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
const Blogpage = ({params, searchParams}) => {
    console.log(searchParams);
    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <PostCard />  
            </div>
            <div className={styles.post}>
                <PostCard />  
            </div>
            <div className={styles.post}>
                <PostCard />  
            </div>
            <div className={styles.post}>
                <PostCard />  
            </div> 
        </div>
    )
}

export default Blogpage