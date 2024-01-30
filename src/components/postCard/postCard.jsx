import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/19748403/pexels-photo-19748403.jpeg"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, perspiciatis nulla dicta dolorem nobis dolor ab in neque nihil? Perferendis, vitae nisi nam nostrum laboriosam id amet eveniet necessitatibus nesciunt consequatur aliquam quas pariatur laudantium totam sint? Ullam, dolores. </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
