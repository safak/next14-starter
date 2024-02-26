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

  //TEMPORARY VARIABLES
  const isAdmin = true;
  const sesstion = true;

  return (
    <div className={style.links}>
      {links.map(({ title, path }) => (
        <NavLink key={path} path={path} title={title} />
      ))}
      {sesstion ? (
        <>
          {isAdmin && <NavLink key={"/admin"} path="/admin" title={"Admin"} />}
          <button>Logout</button>
        </>
      ) : (
        <NavLink key={"/login"} path="/login" title={"Login"} />
      )}
    </div>
  );
};

export default Links;
