// "use client";

// import {
//   CldUploadWidget,
//   CloudinaryUploadWidgetInfo,
//   CloudinaryUploadWidgetResults,
// } from "next-cloudinary";
// import React, { useState } from "react";

// function Blogform() {
//   const [formData, setFormData] = useState({
//     authorName: "",
//     blogCategory: "",
//     blogTitle: "",
//     blogContent: "",
//     blogImage: "",
//     subTitle1: "",
//     description1: "",
//     subTitle2: "",
//     description2: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handlePublish = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_URL}/api/publish`,
//         {
//           method: "POST",
//           mode: "no-cors",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         alert("Form submitted successfully!");
//         setFormData({
//           authorName: "",
//           blogCategory: "",
//           blogTitle: "",
//           blogContent: "",
//           blogImage: "",
//           subTitle1: "",
//           description1: "",
//           subTitle2: "",
//           description2: "",
//         });
//       } else {
//         const errorData = await response.json();
//         alert(`Error submitting form: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error("Fetch error:", error.message);
//       alert("Error submitting form");
//     }
//   };

//   const handleImageUpload = (result: CloudinaryUploadWidgetResults) => {
//     const uploadResults = result.info as CloudinaryUploadWidgetInfo;
//     const blogImageURL = uploadResults.secure_url;

//     setFormData((prevData) => ({
//       ...prevData,
//       blogImage: blogImageURL,
//     }));
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <div className="text-center text-3xl text-[#5f7c7b] italic mb-6">
//         Publish a blog
//       </div>
//       <form onSubmit={handlePublish}>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {/* Author Name */}
//           <div>
//             <label className="block text-[#5f7c7b]">Author name</label>
//             <input
//               type="text"
//               name="authorName"
//               value={formData.authorName}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
//             />
//           </div>

//           {/* Blog Category */}
//           <div>
//             <label className="block text-[#5f7c7b]">Blog Category</label>
//             <select
//               name="blogCategory"
//               value={formData.blogCategory}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
//             >
//               <option value="" disabled selected>
//                 Select a category
//               </option>
//               <option value="Technology">Technology</option>
//               <option value="Lifestyle">Lifestyle</option>
//               <option value="Travel">Travel</option>
//               <option value="Music">Music</option>
//               <option value="Food">Food</option>
//               <option value="Education">Education</option>
//               <option value="Sports">Sports</option>
//               <option value="Others">Others</option>
//             </select>
//           </div>

//           {/* Blog Title */}
//           <div>
//             <label className="block text-[#5f7c7b]">Blog Title</label>
//             <input
//               type="text"
//               name="blogTitle"
//               value={formData.blogTitle}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
//             />
//           </div>

//           {/* Blog Image */}
//           <div>
//             <label className="block text-[#5f7c7b]">Blog Image</label>
//             <CldUploadWidget
//               uploadPreset="hxuyyd1e"
//               onSuccess={handleImageUpload}
//             >
//               {({ open }) => (
//                 <button
//                   type="button"
//                   onClick={() => open()}
//                   className="bg-[#5f7c7b] hover:bg-[#5f7c7b] text-white font-bold py-2 px-4 rounded w-full"
//                 >
//                   Upload an Image
//                 </button>
//               )}
//             </CldUploadWidget>
//           </div>

//           {/* Blog Content */}
//           <div className="col-span-2">
//             <label className="block text-[#5f7c7b]">Blog Content</label>
//             <textarea
//               name="blogContent"
//               value={formData.blogContent}
//               onChange={handleChange}
//               className="w-full h-40 rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
//             ></textarea>
//           </div>

//           {/* Subtitle 1 */}
//           <div className="col-span-2">
//             <label className="block text-[#5f7c7b]">
//               Subtitle 1 (Optional)
//             </label>
//             <input
//               type="text"
//               name="subTitle1"
//               value={formData.subTitle1}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
//             />
//           </div>

//           {/* Description 1 */}
//           <div className="col-span-2">
//             <label className="block text-[#5f7c7b]">
//               Description 1 (Optional)
//             </label>
//             <textarea
//               name="description1"
//               value={formData.description1}
//               onChange={handleChange}
//               className="w-full h-40 rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
//             ></textarea>
//           </div>

//           {/* Subtitle 2 */}
//           <div className="col-span-2">
//             <label className="block text-[#5f7c7b]">
//               Subtitle 2 (Optional)
//             </label>
//             <input
//               type="text"
//               name="subTitle2"
//               value={formData.subTitle2}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
//             />
//           </div>

//           {/* Description 2 */}
//           <div className="col-span-2">
//             <label className="block text-[#5f7c7b]">
//               Description 2 (Optional)
//             </label>
//             <textarea
//               name="description2"
//               value={formData.description2}
//               onChange={handleChange}
//               className="w-full h-40  rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
//             ></textarea>
//           </div>
//         </div>

//         <div className="mt-6 text-center">
//           <button className="bg-[#5f7c7b] text-white p-4 rounded-lg">
//             Publish
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Blogform;
"use client";

import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Blogform() {
  const [formData, setFormData] = useState({
    authorName: "",
    blogCategory: "",
    blogTitle: "",
    blogContent: "",
    blogImage: "",
    subTitle1: "",
    description1: "",
    subTitle2: "",
    description2: "",
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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/publish`,
        {
          method: "POST",
          mode: "cors", // Changed from no-cors to cors
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData({
          authorName: "",
          blogCategory: "",
          blogTitle: "",
          blogContent: "",
          blogImage: "",
          subTitle1: "",
          description1: "",
          subTitle2: "",
          description2: "",
        });
      } else {
        const errorData = await response.json();
        toast.error(`Error submitting form: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
      toast.error("Error submitting form");
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
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="text-center text-3xl text-[#5f7c7b] italic mb-6">
        Publish a blog
      </div>
      <form onSubmit={handlePublish}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Author Name */}
          <div>
            <label className="block text-[#5f7c7b]">Author name</label>
            <input
              type="text"
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            />
          </div>

          {/* Blog Category */}
          <div>
            <label className="block text-[#5f7c7b]">Blog Category</label>
            <select
              name="blogCategory"
              value={formData.blogCategory}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Technology">Technology</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Travel">Travel</option>
              <option value="Music">Music</option>
              <option value="Food">Food</option>
              <option value="Education">Education</option>
              <option value="Sports">Sports</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Blog Title */}
          <div>
            <label className="block text-[#5f7c7b]">Blog Title</label>
            <input
              type="text"
              name="blogTitle"
              value={formData.blogTitle}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            />
          </div>

          {/* Blog Image */}
          <div>
            <label className="block text-[#5f7c7b]">Blog Image</label>
            <CldUploadWidget
              uploadPreset="hxuyyd1e"
              onSuccess={handleImageUpload}
            >
              {({ open }) => (
                <button
                  type="button"
                  onClick={() => open()}
                  className="bg-[#5f7c7b] hover:bg-[#5f7c7b] text-white font-bold py-2 px-4 rounded w-full"
                >
                  Upload an Image
                </button>
              )}
            </CldUploadWidget>
          </div>

          {/* Blog Content */}
          <div className="col-span-2">
            <label className="block text-[#5f7c7b]">Blog Content</label>
            <textarea
              name="blogContent"
              value={formData.blogContent}
              onChange={handleChange}
              className="w-full h-40 rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            ></textarea>
          </div>

          {/* Subtitle 1 */}
          <div className="col-span-2">
            <label className="block text-[#5f7c7b]">
              Subtitle 1 (Optional)
            </label>
            <input
              type="text"
              name="subTitle1"
              value={formData.subTitle1}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            />
          </div>

          {/* Description 1 */}
          <div className="col-span-2">
            <label className="block text-[#5f7c7b]">
              Description 1 (Optional)
            </label>
            <textarea
              name="description1"
              value={formData.description1}
              onChange={handleChange}
              className="w-full h-40 rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            ></textarea>
          </div>

          {/* Subtitle 2 */}
          <div className="col-span-2">
            <label className="block text-[#5f7c7b]">
              Subtitle 2 (Optional)
            </label>
            <input
              type="text"
              name="subTitle2"
              value={formData.subTitle2}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            />
          </div>

          {/* Description 2 */}
          <div className="col-span-2">
            <label className="block text-[#5f7c7b]">
              Description 2 (Optional)
            </label>
            <textarea
              name="description2"
              value={formData.description2}
              onChange={handleChange}
              className="w-full h-40 rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            ></textarea>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-[#5f7c7b] text-white p-4 rounded-lg"
          >
            Publish
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Blogform;
