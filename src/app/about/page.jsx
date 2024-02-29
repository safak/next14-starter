import styles from "./about.module.css";
import Image from "next/image";
const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver & better</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur distinctio sed fuga commodi, deserunt recusandae mollitia tempore magnam architecto veniam! Est incidunt, unde delectus enim rem officiis molestias rerum placeat!</p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                </div>
            </div>    
            <div className={styles.imgContainer}>
                <Image 
                    src="/about.png" 
                    fill 
                    alt="About Page"  
                    className={styles.img}
                />
            </div>
            
        </div>
    )
}

export default AboutPage