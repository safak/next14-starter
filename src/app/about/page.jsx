import React from "react";
import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/20326813/pexels-photo-20326813/free-photo-of-a-city-skyline-with-a-large-building-in-the-middle.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill />
      </div>
    </div>
  );
};

export default AboutPage;
