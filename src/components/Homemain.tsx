"use client";
import Link from "next/link";
import React from "react";

function Homemain() {
  return (
    <div>
      <div
        className="text-white text-center p-4 mt-4 font-sans"
        style={{
          backgroundImage: `url('/pennew.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          height: "500px",
          width: "100%",
        }}
      >
        <div className="text-4xl font-light my-2">Empower your voice</div>
        <div className="text-lg font-bold mb-12">Inspire, Inform, Inigite</div>
        <div className="text-lg font-light mb-12">
          Here is the biggest collection of the best creative thoughts
          <div className=""> Describe the world in your eyes. </div>
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
