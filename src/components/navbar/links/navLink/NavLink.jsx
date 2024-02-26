"use client";
import React from "react";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ path, title }) => {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`${styles.container} ${pathName === path && styles.active}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
