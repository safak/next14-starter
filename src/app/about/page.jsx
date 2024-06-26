import styles from "./about.module.css";
import Image from "next/image";

export const metadata = {
  title: "About Page",
  description: "About Description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We are harder stronger fast and slower at the same time yo
        </h1>
        <p className={styles.desc}>
          This is a big ass para and has quite few lines yo yo yo This is a big
          ass para and has quite few lines yo yo yo This is a big ass para and
          has quite few lines yo yo yo This is a big ass para and has quite few
          lines yo yo yo{" "}
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
