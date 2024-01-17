import Image from "next/image";
import styles from './about.module.css'
const AboutPage = () => {
return ( 
    <div className= {styles.container}>
<div className={styles.textContainer}>
    <h2>About Agency</h2>
    <p>Life doesn’t require that we be the best, only that we try our best</p>
</div>
<div className={styles.boxes}>
<div className={styles.box}>
    <h1>10 K+</h1>
    <p>Year of experience</p>
</div>
</div>
    </div>

    );

}
export default AboutPage