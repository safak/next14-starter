import Image from "next/legacy/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.tittle}>Creative thoughts agency</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos possimus
          modi quasi placeat recusandae iusto tempora quia soluta maiores nobis?
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt=""
            layout="fill"
            className={styles.brandImg}
            sizes="100%"
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/hero.gif"
          alt=""
          className={styles.heroImg}
          layout="fill"
          sizes="(max-width: 768px) 100vw"
          unoptimized
          priority
        />
      </div>
    </div>
  );
};

export default Home;
