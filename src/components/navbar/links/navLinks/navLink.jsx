// Reactフック使用するときは、クライアントコンポーネントである必要がある
"use client";

import Link from "next/link";
import React from "react";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
// Links.jsxから受け取ったitem propsを引数として渡している
function NavLink({ item }) {
  // usePathname()で現在のパス名を取得し、変数pathNameに代入
  const pathName = usePathname();

  return (
    <div>
      <Link
        href={item.path}
        // styles.containerは常時適用、styles.activeはpathNameとitem.pathが一致していれば適用
        className={`${styles.container} ${
          pathName === item.path && styles.active
        }`}
      >
        {item.title}
      </Link>
    </div>
  );
}

export default NavLink;
