import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import Image from "next/image"
import { auth } from "@/lib/auth"
const Navbar = async () => {

  const session= await auth();



  return (
    <div className={styles.container}>
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={180} height={180} className={styles.logo} />
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  )
}

export default Navbar