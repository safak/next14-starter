import React from "react";
import styles from "./links.module.css";
import NavLink from "./navLinks/navLink";

function Links() {
  const links = [
    {
      title: "Homepage",
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

  // とりあえず
  const session = false;
  const isAdmin = true;
  return (
    <div className={styles.links}>
      {/* keyを書かなくてもエラーは出ないが、バグやパフォーマンスの低下を防ぐため必ず書く */}
      {/* (link) => ()は、(link) => { return (); }の省略記法*/}
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {/* ログイン時（session=true)、 */}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
}

export default Links;
