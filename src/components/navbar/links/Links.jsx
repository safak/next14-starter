import React from "react";
import Link from "next/link";

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
    <div>
      {links.map(({ title, path }) => (
        <Link key={path} href={path}>{title}</Link>
      ))}
    </div>
  );
};

export default Links;
