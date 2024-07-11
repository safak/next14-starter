"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

const NavLink = ({ item }) => {
    const pathName = usePathname();
  return <Link href={item.url} className={`${styles.container} ${pathName === item.url && styles.active}`}>{item.title}</Link>;
};

export default NavLink;
