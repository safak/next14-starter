import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>02.23.2024</span>
      </div>
      <div className={styles.botton}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis sequi
          hic cum, sit pariatur commodi consectetur a voluptates aperiam
          doloribus fugiat. Deserunt hic, fugiat nam enim harum eveniet
          praesentium.
        </p>
        <Link className={styles.link} href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
