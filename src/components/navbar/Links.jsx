"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./links.module.css";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { logoutUser } from "@/app/actions/authActions";

export default function Links({ session }) {
  const isAdmin = false;

  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !navRef.current?.contains(event.target) &&
        !menuRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const pathName = usePathname();

  const links = [
    { title: "home", path: "/" },
    { title: "about", path: "/about" },
    { title: "contact", path: "/contact" },
    { title: "blog", path: "/blog" },
  ];

  return (
    <>
      <Image
        className="cursor-pointer md:hidden z-10"
        src="/menu.png"
        width={30}
        height={30}
        alt="hamburger"
        onClick={() => setOpen((prev) => !prev)}
        ref={menuRef}
      />

      <nav className="hidden md:flex md:gap-[2rem] lg:gap-[3rem] items-center">
        {links.map((link) => (
          <Link
            className={`capitalize ${
              pathName === link.path ? styles.active : undefined
            } ${
              pathName.startsWith(`${link.path}/`) ? styles.active : undefined
            }`}
            key={link.title}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}

        {session ? (
          <>
            {isAdmin && (
              <Link
                className={pathName === "/admin" ? styles.active : undefined}
                href="/admin"
              >
                Admin
              </Link>
            )}

            <form action={logoutUser}>
              <button className="font-medium cursor-pointer p-2 rounded-sm bg-gray-500 text-primary-soft hover:bg-white">
                Logout
              </button>
            </form>
          </>
        ) : (
          <Link
            className={pathName === "/login" ? styles.active : undefined}
            href="/login"
          >
            Login
          </Link>
        )}
      </nav>

      <nav
        className={`md:hidden ${styles.nav} ${
          open ? styles.show : styles.hide
        }`}
        ref={navRef}
      >
        {links.map((link) => (
          <Link
            className={`capitalize ${
              pathName === link.path ? styles.active : undefined
            }`}
            key={link.title}
            href={link.path}
            onClick={() => setOpen(false)}
          >
            {link.title}
          </Link>
        ))}

        {session ? (
          <>
            {isAdmin && (
              <Link
                className={pathName === "/admin" ? styles.active : undefined}
                href="/admin"
              >
                Admin
              </Link>
            )}

            <form action={logoutUser}>
              <button className="font-medium cursor-pointer p-2 rounded-sm bg-gray-500 text-primary-soft hover:bg-white">
                Logout
              </button>
            </form>
          </>
        ) : (
          <Link
            className={pathName === "/login" ? styles.active : undefined}
            href="/login"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
        )}
      </nav>
    </>
  );
}
