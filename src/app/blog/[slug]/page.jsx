import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/16671509/pexels-photo-16671509/free-photo-of-bird-perching-on-the-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>Title</div>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/2167039/pexels-photo-2167039.jpeg"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          explicabo temporibus! Minus explicabo perspiciatis asperiores sunt
          facilis maiores eveniet, distinctio voluptatibus consequuntur,
          doloremque corporis, enim saepe nisi id officia reprehenderit.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
