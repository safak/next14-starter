// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import Blog from "./Blog";

// function Selectedblog({ category }) {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     // Fetch blogs based on category
//     const fetchBlogs = async () => {
//       try {
//         const res = await fetch(
//           `http://localhost:3000/api/getSection?category=${category}`
//         );
//         if (!res.ok) {
//           throw new Error("Failed to fetch blogs");
//         }
//         const data = await res.json();
//         setBlogs(data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };

//     fetchBlogs();
//   }, [category]);

//   return (
//     <div>
//       <div className="flex flex-col">
//         <Image
//           src={`/${category}.jpg`}
//           alt="blog"
//           width={1920}
//           height={500}
//           className="rounded-lg h-[500px]"
//         />
//         <div className="flex flex-row gap-12 justify-center my-12">
//           {blogs.map((blog) => (
//             <Blog key={blog.id} title={blog.blogTitle} id={blog.id} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Selectedblog;
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Blog from "./Blog";

function Selectedblog({ blogCategory, section }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/getSection?blogCategory=${blogCategory}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [blogCategory]);

  return (
    <div>
      <div className="flex flex-col">
        <Image
          src={`/${section}.jpg`}
          alt="blog"
          width={1920}
          height={500}
          className="rounded-lg h-[500px]"
        />
        <div className="flex flex-row gap-12 justify-center my-12">
          {blogs.map((blog) => (
            <Blog
              key={blog._id}
              title={blog.blogTitle}
              id={blog._id}
              blogImage={blog.blogImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Selectedblog;
