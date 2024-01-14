import Links from "./links/Links";
import styles from "./Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  console.log(styles);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};
export default Navbar;
