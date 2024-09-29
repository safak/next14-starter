import Image from "next/legacy/image";
import styles from "./about.module.css";
function Aboutpage() {
  // console.log("lets check wehre its works!");

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTittle}>About Agency</h2>
        <h1 className={styles.tittle}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          minus praesentium numquam voluptatibus fuga ab.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          layout="fill"
          className={styles.img}
          sizes="100%"
          priority
        />
      </div>
    </div>
  );
}

export default Aboutpage;
