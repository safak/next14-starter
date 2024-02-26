"use client";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  //TEMPORARY VARIABLES
  const isAdmin = true;
  const sesstion = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map(({ title, path }) => (
          <NavLink key={path} path={path} title={title} />
        ))}
        {sesstion ? (
          <>
            {isAdmin && (
              <NavLink key={"/admin"} path="/admin" title={"Admin"} />
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink key={"/login"} path="/login" title={"Login"} />
        )}
      </div>
      <button onClick={() => setOpen(prev => !prev)}>Menu</button>
      {
        open && <div className={styles.mobileLinks}>
          {links.map(({path, title}) => <NavLink key={path} path={path} title={title} />)}
        </div>
      }
    </div>
  );
};

export default Links;
