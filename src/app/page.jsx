import styles from "./home.module.css"
import Image from "next/image"

const Home = () => {
  return <div className={styles.container}>
  <div className={styles.textContainer}>
    <h1 className={styles.title}>Head Thoughts Agency</h1>
    <p className={styles.desc}> This consists of a paragraph right inder the main title of this page his consists of a paragraph right inder the main title of this page</p>
    <div className={styles.buttons}>
      <button className={styles.button}>Learn More</button>
      <button className={styles.button}>Contact</button>
    </div>
    <div className={styles.brands}>
      <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
    </div>
  </div>
  <div className={styles.imgContainer}>
    <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
  </div>
  </div>
};

export default Home;