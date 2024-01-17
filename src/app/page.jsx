import styles from "./home.module.css"
import  Image from 'next/image';
const Home = () => {
  return(
    <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Creative Thoughts Agency</h1>
         <p className={styles.desc}>Your success and happiness lies in you. Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.</p>
              <div className={styles.buttons}>
                <button className={styles.button}>Learn more</button>
              <button className={styles.button}>Contact</button>
              </div>
              <div className={styles.brands}>
                <Image src="/brands.png" fill className={styles.brandsImg}/>
              </div>
        </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" fill className={styles.heroImg}/>
    </div>
    </div>
  );
};

export default Home;