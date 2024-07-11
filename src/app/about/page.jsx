import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
	return (
		<div className={styles.container}>
			<Image
				src="https://images.pexels.com/photos/26811653/pexels-photo-26811653/free-photo-of-photo-of-a-man-jumping-a-motorbike-midair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				alt=""
				fill
			/>
		</div>
	);
};

export default About;
