import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/14408902/pexels-photo-14408902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
