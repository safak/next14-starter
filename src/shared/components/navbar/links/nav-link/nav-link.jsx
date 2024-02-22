'use client';

import Link from "next/link";
import styles from "./nav-link.module.css";
import { usePathname } from "next/navigation";

export const NavLink = ({path,children}) => {
    const currentPath = usePathname();

    return(
        <Link href={path} className={`${styles.container} ${currentPath === path && styles.active}`}>{children}</Link>
    )
}