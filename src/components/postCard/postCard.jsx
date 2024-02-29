import Image from "next/image";
import Link from "next/link"
import styles from "./postCard.module.css";
const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        fill
                        className={styles.img}
                    /> 
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Desc</p>
                <Link className={styles.link} href="/blog/post">Read More</Link>
            </div>
        </div>
    )
}

export default PostCard