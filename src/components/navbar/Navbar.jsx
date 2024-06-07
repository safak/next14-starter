import Links from "./links/links";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
