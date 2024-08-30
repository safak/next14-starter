"use client";
import Image from "next/image";
import React from "react";

interface Blog {
  _id: string;
  blogTitle: string;
  authorName: string;
  blogContent: string;
  blogImage: string;
  createdAt: Date;
}

function SingleBlog({ blog }: { blog: Blog }) {
  return (
    <div>
      <div className="flex flex-col m-8">
        <Image
          src="/blogImage.jpg"
          alt="home"
          width={500}
          height={500}
          className="rounded-lg w-full h-auto mr-8"
        />
        <div className="flex flex-col">
          <div className="text-[#192841] text-3xl font-bold my-8">
            {blog.blogTitle}
          </div>
          <div className="flex flex-row mb-4 gap-4">
            <Image
              src="/profile.jpg"
              alt="home"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="text-[#192841] text-xl font-light mt-4">
              Author :{" "}
            </div>
            <div className="text-[#192841] text-xl font-light mt-4">
              {blog.authorName}
            </div>
          </div>
          <div className="text-[#192841] text-xl font-light ">
            {blog.blogContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
