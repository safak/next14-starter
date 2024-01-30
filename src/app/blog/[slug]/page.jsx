import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19748403/pexels-photo-19748403.jpeg"
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
            src="https://images.pexels.com/photos/19748403/pexels-photo-19748403.jpeg"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Author</div>
            <div className={styles.detailValue}>username</div>
          </div>
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>01.01.2024</div>
          </div>
        </div>

        <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis officia doloribus vitae quaerat aspernatur et similique deleniti officiis perspiciatis consectetur quis, accusantium odio recusandae fuga rerum a magni sunt.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
