import Image from "next/image";
import styles from "./post-card.module.css";
import Link from "next/link";

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}> 
                <div className={styles.imgContainer}>
                    <Image src="/about.png" alt="Post" width={300} height={300} className="styles.img" />
                </div>
                <span className={styles.date}>16.02.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Post Title</h1>
                <p className={styles.desc}>Post text</p>
                <Link href="/blog/post">Read more!</Link>
            </div>
        </div>
    );
}
export default PostCard;