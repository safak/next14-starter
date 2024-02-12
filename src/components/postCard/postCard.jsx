import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/5391172/pexels-photo-5391172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill className={styles.img} />
        </div>
        <span className={styles.date}>20.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel numquam dolorem laborum rerum odio autem nemo quisquam quidem fuga repellat ducimus eveniet accusantium, laboriosam iusto est inventore doloribus obcaecati.</p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
};
export default PostCard;
