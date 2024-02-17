import Image from "next/image";
import styles from "./single-post.module.css";


const SinglePostPage = async () => {

  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={"https://cdn.pixabay.com/photo/2024/02/09/14/54/butterfly-8563213_1280.jpg"} alt="" fill className={styles.img} />
        </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Tytuł</h1>
        <div className={styles.detail}>
        <Image src="https://cdn.pixabay.com/photo/2014/08/08/20/51/hunger-413685_1280.jpg" width={90} height={60}/>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Adam Mickiewicz</span>
            <span className={styles.detailValue}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
        </div>
        <div className={styles.content}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default SinglePostPage;