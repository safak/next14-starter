import Image from "next/image";
import styles from "./post-card.module.css";
import Link from "next/link";

const PostCard = ({post}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}> 
                <div className={styles.imgContainer}>
                    <Image src={post.img ? post.img : "/about.png"} alt="Post" width={300} height={400} className="styles.img" />
                </div>
                <span className={styles.date}>16.02.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.description}</p>
                <Link href={`/blog/${post.slug}`}>Read more!</Link>
            </div>
        </div>
    );
}
export default PostCard;