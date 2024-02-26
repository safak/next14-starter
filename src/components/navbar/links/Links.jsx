import React from "react";
import style from "./links.module.css";
import NavLink from "./navLink/NavLink";

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
        <NavLink key={path} path={path} title={title}/>
      ))}
    </div>
  );
};

export default Links;
