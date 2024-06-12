"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* <div className="flex flex-row  justify-between"> */}
      <div className="flex flex-row justify-between mx-8 mt-8 ">
        <div className="text-[#192841] font-bold ">Logo</div>
        <div className="text-[#192841] space-x-4 hidden md:flex lg:flex ">
          <Link href="/home" className="hover:text-yellow-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-500">
            About
          </Link>
          <Link href="/contacts" className="hover:text-yellow-500">
            Contact
          </Link>
          <Link href="/blogs" className="hover:text-yellow-500">
            Blogs
          </Link>
          <Link href="/login" className="hover:text-yellow-500">
            LogIn
          </Link>
        </div>
      </div>
      <div className="">
        <button
          onClick={() => setOpen(true)}
          className="flex md:hidden lg:hidden justify-end text-[#192841] top-0 right-0 bg-opacity-50 hover:text-yellow-500"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="bg-white">
          <div className="absolute  w-full h-full bg-white bg-opacity-50">
            <button onClick={() => setOpen(false)}>Close</button>
            <div className="flex flex-col justify-end text-[#192841] space-y-4 ">
              <Link href="/" className="hover:text-yellow-500">
                Home
              </Link>
              <Link href="/about" className="hover:text-yellow-500">
                About
              </Link>
              <Link href="/contacts" className="hover:text-yellow-500">
                Contact
              </Link>
              <Link href="/blogs" className="hover:text-yellow-500">
                Blogs
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
}
