"use client";
import React from "react";
import ImageCarousel from "./../../components/Imagecarousel";
import Footer from "./../../components/footer/Footer";

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row mt-4 bg-[#FEF3C7] mb-8">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <div className="text-[#192841] max-w-lg">
            <h1 className="text-2xl font-bold my-4">
              You can create digital ideas that are bigger, bolder, braver, and
              better
            </h1>
            <p className="text-lg font-light my-4">
              We are a team of creative thinkers and problem solvers dedicated
              to expanding the limits of what is possible by helping brands
              achieve their goals. We utilize our experience working with major
              global corporations to fuel creative innovation that delivers real
              results.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <ImageCarousel />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
