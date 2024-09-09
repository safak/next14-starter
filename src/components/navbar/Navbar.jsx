import React from "react";
import Links from "./links/Links";
// global.css以外のcssファイルはimportする必要あり
import styles from "./navbar.module.css";
// ナビゲーションバーの作成
function Navbar() {
  const navbar = [];
  return (
    <div className={styles.container}>
      <div className={styles.logo}>logo</div>
      <Links />
    </div>
  );
}

export default Navbar;
