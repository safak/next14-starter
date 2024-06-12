"use client";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import React, { useState } from "react";

function Blogform() {
  const [formData, setFormData] = useState({
    authorName: "",
    publishDate: "",
    blogCategory: "",
    blogTitle: "",
    blogContent: "",
    blogImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePublish = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/publish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          authorName: "",
          publishDate: "",
          blogCategory: "",
          blogTitle: "",
          blogContent: "",
          blogImage: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Error submitting form: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
      alert("Error submitting form");
    }
  };

  const handleImageUpload = (result: CloudinaryUploadWidgetResults) => {
    const uploadResults = result.info as CloudinaryUploadWidgetInfo;
    const blogImageURL = uploadResults.secure_url;

    setFormData((prevData) => ({
      ...prevData,
      blogImage: blogImageURL,
    }));
  };

  return (
    <div>
      <div className="flex justify-center text-3xl text-[#192841] italic">
        Publish a blog
      </div>
      <form onSubmit={handlePublish}>
        <div className="flex sm:flex-row flex-col mx-8 md:mx-8 lg:mx-0 gap-4 my-8 justify-center">
          <div className="flex flex-col gap-4">
            <div className="text-[#192841]">Author name</div>
            <input
              type="text"
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
              className="rounded-lg border border-[#192841] p-2 bg-gray-200"
            />
            <div className="text-[#192841]">Publish date</div>
            <input
              type="date"
              name="publishDate"
              value={formData.publishDate}
              onChange={handleChange}
              className="rounded-lg border border-[#192841] p-2 bg-gray-200"
            />
            <div className="text-[#192841]">Choose blog category</div>
            <select
              name="blogCategory"
              value={formData.blogCategory}
              onChange={handleChange}
              className="rounded-lg border border-[#192841] p-2 bg-gray-200"
            >
              <option value="Technology">Technology</option>
              <option value="LifeStyle">Lifestyle</option>
              <option value="Travel">Travel</option>
              <option value="Music">Music</option>
              <option value="Foods">Food</option>
              <option value="Education">Education</option>
              <option value="Sports">Sports</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="flex flex-col gap-4 sm:ml-24 ml-0">
            <div className="text-[#192841]">Blog image</div>
            <CldUploadWidget
              uploadPreset="hxuyyd1e"
              onSuccess={handleImageUpload}
            >
              {({ open }) => (
                <button
                  type="button"
                  onClick={() => open()}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Upload an Image
                </button>
              )}
            </CldUploadWidget>
            <div className="text-[#192841]">Blog Title</div>
            <input
              type="text"
              name="blogTitle"
              value={formData.blogTitle}
              onChange={handleChange}
              className="rounded-lg border border-[#192841] p-2 bg-gray-200"
            />
            <div className="text-[#192841]">Blog Content</div>
            <textarea
              name="blogContent"
              value={formData.blogContent}
              onChange={handleChange}
              className="rounded-lg border border-[#192841] p-2 bg-gray-200"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-[#192841] text-white p-4 rounded-lg">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default Blogform;
