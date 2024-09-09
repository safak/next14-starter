"use client";

import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLinks/navLink";

// const Linksを作成後、外に移動させた
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

// スマホ画面で、メニューボタンを押して開いたらtrue,閉じたらfalseを変数openにセットする関数
const Links = () => {
  const [open, setOpen] = useState(false);

  // とりあえず
  const session = true;
  const isAdmin = true;
  return (
    // 要素にif分岐などの動きをつけるときはその要素をdiv.containerで囲むのが良い？
    <div className={styles.container}>
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
      {/* Menuボタンを押したらopenの値がtrueとfalseで交互に変化する */}
      <button
        className={styles.menuButton}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        Menu
      </button>
      {/* スマホ画面用のナビゲーションバー作成 */}
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
