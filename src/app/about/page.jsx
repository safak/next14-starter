import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>Better digital ideas</h1>
          <p className={styles.desc}>
            test test test
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experienc</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experienc</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experienc</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="About Image" fill className={styles.img} />
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
