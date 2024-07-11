import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<Link href="/" className={styles.logo}>
				<div className={styles.firstName}>Monkey D</div>
				<div className={styles.lastName}>. Luffy</div>
			</Link>
			<div>
				<Links />
			</div>
		</div>
	);
};

export default Navbar;
