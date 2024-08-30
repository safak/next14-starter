import Image from "next/image";
import React from "react";
import connectMongoDB from "../../../../lib/mongodb";
import Blog from "../../../../models/blogModel";

async function fetchBlog(id: string) {
  await connectMongoDB();
  const blog = await Blog.findById(id);
  if (!blog) {
    throw new Error("Blog not found");
  }
  return JSON.parse(JSON.stringify(blog));
}

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const blog = await fetchBlog(id);

  return (
    <div>
      <div className="flex flex-col m-8">
        <Image
          src={blog.blogImage}
          alt="home"
          width={500}
          height={500}
          className="rounded-lg w-full mr-8"
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
};

export default page;
