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

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const blog = await fetchBlog(id);

  return (
    <div>
      <div className="flex flex-col m-8">
        {/* Blog Image */}
        <Image
          src={blog.blogImage}
          alt="Blog"
          width={500}
          height={300}
          className="rounded-lg w-full sm:h-[500px] h-auto mr-8"
        />

        <div className="flex flex-col">
          {/* Blog Title */}
          <div className="text-[#24321c] text-4xl text-center font-bold my-8">
            {blog.blogTitle}
          </div>
          {/* Author Info */}
          <div className="flex flex-row mb-4 gap-4">
            <Image
              src="/profile.jpg"
              alt="Author"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="text-[#192841] text-xl font-light mt-4">
              Author: {blog.authorName}
            </div>
          </div>
          {/* Blog Content */}
          <div className="text-[#192841] text-xl font-light mb-8">
            {blog.blogContent}
          </div>

          {blog.subTitle1 && (
            <div>
              <div className="text-[#24321c] text-2xl font-semibold mb-2">
                {blog.subTitle1}
              </div>

              <div className="text-[#192841] text-lg font-light mb-8">
                {blog.description1}
              </div>
            </div>
          )}

          {/* Optional Subtitle 2 and Description 2 */}
          {blog.subTitle2 && (
            <div>
              <div className="text-[#24321c] text-2xl font-semibold mb-2">
                {blog.subTitle2}
              </div>
              <div className="text-[#192841] text-lg font-light mb-8">
                {blog.description2}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
