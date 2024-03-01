import Image from "next/image";
import styles from "./singlePost.module.css";
const SinglePostPage = ({params}) => {
    console.log(params)
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                src="https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=600"
                fill
                alt=""
                className={styles.img}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                <Image 
                    className={styles.avatar}
                    src="https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    width={50}
                    height={50}
                />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry james</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius doloribus nihil illum aut impedit, animi esse dignissimos a rerum molestiae magnam libero quas dolore error enim cum et similique.
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage