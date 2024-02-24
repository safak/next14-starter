import Link from "next/link";
import React from "react";

export default function Links() {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/",
    },
    {
      title: "Contact",
      path: "/",
    },
    {
      title: "Blog",
      path: "/",
    },
  ];

  return (
    <div className="space-x-4 text-white hover:bg-white">
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}
