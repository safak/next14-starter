"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "./footer/Footer";
import Homemain from "./Homemain";
import Blog from "./Blog";
import Sectionblog from "./Sectionblog";

function Firstpage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getBlogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div>
      <Homemain />
      <div className="mt-8 text-2xl text-[#040326] text-center p-4 font-sans justify-center italic ">
        Write your story, inspire the world
      </div>
      <div className="flex flex-wrap mt-8 justify-center gap-12">
        {blogs.map((blog) => (
          <Blog
            key={blog._id}
            title={blog.blogTitle}
            id={blog._id}
            blogImage={blog.blogImage}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Firstpage;
