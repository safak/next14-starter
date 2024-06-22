import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Find, Pay, and Park with Ease</h1>
        <p className={styles.desc}>
          Discover the future of parking with ParkEase, where convenience meets technology. 
          Say goodbye to the hassle of searching for parking spots and dealing with outdated payment methods. 
          With ParkEase, you can find real-time parking availability, reserve your spot in advance, 
          and pay securely through our user-friendly mobile app.
        </p>
        <div className={styles.buttons}>
        <a
            href="https://play.google.com/store/apps/details?id=your_app_package_name"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/ios.png" alt="Google Play Store" width={150} height={50} />
          </a>
          <a
            href="https://apps.apple.com/us/app/your-app-name/id1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/apple.png" alt="Apple App Store" width={150} height={50} />
          </a>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero2.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
