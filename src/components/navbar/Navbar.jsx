import Link from "next/link.js";
import Links from "./links/Links.jsx";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth.js";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
