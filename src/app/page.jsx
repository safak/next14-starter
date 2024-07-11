import Image from "next/image";
import styles from "./homepage.module.css";

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Be Creative Minded.</h1>
				<p className={styles.desc}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div className={styles.buttons}>
					<button className={styles.button}>Learn More</button>
					<button className={styles.button}>Contact</button>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<Image src="/hero.gif" alt="" fill className={styles.heroImg} />
			</div>
		</div>
	);
};

export default Home;
