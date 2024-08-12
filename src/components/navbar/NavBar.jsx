import Links from "./links/Links";
import Link from "next/link";
import styles from "./navbar.module.css"


const NavBar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Logo</Link>
            <div>
                <Links/>
            </div>
        </div>
    )
}

export default NavBar;
