import Image from "next/image";
import Link from "next/link";
import React from "react";

interface blogprops {
  id: string;
  title: string;
  blogImage: string;
}

function Blog({ title, id, blogImage }: blogprops) {
  return (
    <div>
      <div className="flex flex-col w-72 mb-8  shadow-normalComponent p-4 rounded-lg">
        <Image
          src={blogImage}
          alt="home"
          width={500}
          height={500}
          className="rounded-lg w-72 h-60"
        />
        <div className="text-[#192841] text-3xl font-bold my-4 italic">
          {title}
        </div>
        <div className="text-[#192841] text-xl font-light ">
          <Link href={`/blog/${id}`}>Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
