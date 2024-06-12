"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Homemain() {
  return (
    <div>
      <div className="bg-[#040326] text-white text-center p-4 mt-4 font-sans">
        <div className="text-4xl font-light my-2">Empower your voice</div>
        <div className="text-lg font-bold mb-8">Inspire, Inform, Inigite</div>
        <div className="text-lg font-light mb-8">
          Here is the biggest collection of the best creative thoughts
          <div className="">Just find the thought for your business.</div>
        </div>
        <Link href="/createBlog">
          <button className="bg-white text-[#040326] px-4 py-2 rounded-lg mb-12">
            Create a blog
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Homemain;
