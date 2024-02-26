import React from "react";
import Link from "next/link";
import style from './links.module.css'

const Links = () => {
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

  return (
    <div className={style.links}>
      {links.map(({ title, path }) => (
        <Link key={path} href={path}>{title}</Link>
      ))}
    </div>
  );
};

export default Links;
