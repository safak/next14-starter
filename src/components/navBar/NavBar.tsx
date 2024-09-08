"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function NavBar() {
  return (
    <div>
      <div className="flex flex-row justify-between mx-8">
        <div className="flex items-center mt-4">
          <Image src="/w.png" alt="Logo" width={50} height={50} />
        </div>
        <div className="text-[#35522b] space-x-4 flex mt-8">
          <Link href="/home" className="hover:text-yellow-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-500">
            About
          </Link>
          <Link href="/blogs" className="hover:text-yellow-500">
            Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
