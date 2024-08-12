import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
    return (
        <>
            <div className={styles.imgContainer}>
                <Image
                    src="/about.png"
                    alt="About Image"
                    fill
                    className={styles.img}
                />
            </div>
        </>
    );
};

export default AboutPage;