import styles from "./singlePost.module.css";
import Image from "next/image";
const SingleBlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/15580802/pexels-photo-15580802/free-photo-of-woman-holding-flowers-and-looking-at-her-boyfriend.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          className={styles.img}
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/7490540/pexels-photo-7490540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={50} height={50}
            className={styles.avatar}
          ></Image>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>John Weasley</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum adipisci quasi laboriosam ullam ipsum blanditiis harum sunt sequi dolorem odit? Veniam illo non aliquam odit ea. Praesentium quibusdam laudantium hic.
          </div>
      </div>
    </div>
  );
};
export default SingleBlogPage;
