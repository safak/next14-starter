"use client";
import React, { useState, useEffect } from "react";
import Footer from "./../../components/footer/Footer";
import Sectionblog from "../../components/Sectionblog";
import Selectedblog from "../../components/Selectedblog";
import Blog from "../../components/Blog";

export default function Page() {
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState(3); // Default to 3 for large screens

  const sections = [
    { section: "Technology", category: "Technology" },
    { section: "Education", category: "Education" },
    { section: "Foods", category: "Foods" },
    { section: "Music", category: "Music" },
    { section: "Travel", category: "Travel" },
    { section: "LifeStyle", category: "LifeStyle" },
    { section: "Sports", category: "Sports" },
    { section: "Others", category: "Others" },
  ];

  const handleSectionClick = (index, category) => {
    setSelectedBlogIndex(index);
    setSelectedCategory(category);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - visibleSections, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + visibleSections, sections.length - visibleSections)
    );
  };

  useEffect(() => {
    const updateVisibleSections = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSections(3); // Large screens
      } else if (window.innerWidth >= 768) {
        setVisibleSections(2); // Medium screens
      } else {
        setVisibleSections(1); // Small screens
      }
    };

    updateVisibleSections();
    window.addEventListener("resize", updateVisibleSections);

    return () => window.removeEventListener("resize", updateVisibleSections);
  }, []);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/getBlogs`
        );
        console.log(response);
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
    <div className="flex flex-col">
      <div className="flex flex-row gap-12 my-8 justify-center items-center">
        {selectedBlogIndex === null ? (
          <>
            <button onClick={handlePrevious} disabled={currentIndex === 0}>
              &lt;
            </button>
            {sections
              .slice(currentIndex, currentIndex + visibleSections)
              .map((section, index) => (
                <Sectionblog
                  key={index}
                  section={section.section}
                  onClick={() =>
                    handleSectionClick(currentIndex + index, section.category)
                  }
                />
              ))}
            <button
              onClick={handleNext}
              disabled={currentIndex >= sections.length - visibleSections}
            >
              &gt;
            </button>
          </>
        ) : (
          <Selectedblog
            section={sections[selectedBlogIndex].section}
            blogCategory={selectedCategory}
          />
        )}
      </div>
      {selectedBlogIndex === null && (
        <>
          <div className="text-4xl font-semibold text-[#24321c] text-start my-8 ms-8">
            Latest Blogs
          </div>
          <div className="flex flex-wrap justify-center my-8 gap-24">
            {blogs.map((blog) => (
              <Blog
                key={blog._id}
                title={blog.blogTitle}
                id={blog._id}
                blogImage={blog.blogImage}
              />
            ))}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
