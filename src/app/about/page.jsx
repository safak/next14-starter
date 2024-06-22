import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
title: "About Page",
description: "About description",
};


const AboutPage = () => {

return (
<div className={styles.container}>
    <div className={styles.textContainer}>
    <h2 className={styles.subtitle}>Welcome to ParkEase!</h2>
    <h1 className={styles.title}>
        We're all about making parking hassle-free and efficient for all.
    </h1>
    <p className={styles.desc}>
    ParkEase was born out of the frustration of finding and paying for parking in busy urban areas. 
    With a focus on user convenience and security, ParkEase was developed to streamline the parking process and enhance the overall experience.
    </p>
    <div className={styles.boxes}>
        <div className={styles.box}>
        <h1>100%</h1>
        <p>Transparent pricing with no hidden fees</p>
        </div>
        <div className={styles.box}>
        <h1>95%</h1>
        <p>Of users find a parking spot within 5 minutes</p>
        </div>
        <div className={styles.box}>
        <h1>1 K+</h1>
        <p>Parking spots monitored in real-time</p>
        </div>
    </div>
    </div>
    <div className={styles.imgContainer}>
    <Image
        src="/about.png"
        alt="About Image"
        fill
        className={styles.img}
    />
    </div>
</div>
);
};

export default AboutPage;