// "use client";
import Image from "next/legacy/image";
import styles from "./postCard.module.css";
import Link from "next/link";

function PostCard({post}) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/17514561/pexels-photo-17514561/free-photo-of-wooden-shed-near-water-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="A view of a staircase with ornate carvings"
            className={styles.img}
            priority
            layout="fill" // используйте 'fill', если у вас правильно настроен контейнер
          />
        </div>
        <span className={styles.date}>01.08.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>
          {post.body}
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
