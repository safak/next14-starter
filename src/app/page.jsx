import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Neno&apos;s Agency.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi maiores
          esse nulla libero quisquam cum ratione laboriosam
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact Us</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brand} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
