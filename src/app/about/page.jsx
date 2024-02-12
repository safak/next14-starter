import Image from "next/image";
import styles from './about.module.css'

const AboutPage = () => {
return ( 
    <div className= {styles.container}>
<div className={styles.textContainer}>
    <h2 className={styles.subtitle}>About Agency</h2>
    <h1 className={styles.title}>Life doesn’t require that we be the best, only that we try our best</h1>
    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem aperiam deserunt autem? Nulla quasi non odio dicta animi repellat natus, ducimus eum quas hic voluptatum vitae, voluptas debitis voluptate.
    Totam porro sint itaque natus consectetur nostrum modi eaque autem maxime cumque blanditiis obcaecati tempora sapiente sequi molestias, officiis error exercitationem. Obcaecati quia velit reprehenderit quos at, quaerat rerum cumque!
    Nam fugiat officiis provident.</p>
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
<Image src="/about.png" fill alt="About Image" className={styles.img}></Image>
</div>

    </div>

    );

}
export default AboutPage