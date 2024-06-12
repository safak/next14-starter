import React from "react";
import Image from "next/image";
import Footer from "./../../components/footer/Footer";
import { Carousel } from "flowbite-react";

export default function page() {
  return (
    <div>
      <div className="w-full mt-8">
        <Image
          src="/aboutnew.jpg"
          alt="about"
          width={1920}
          height={1080}
          className="rounded-lg w-full h-[500px]"
        />
      </div>
      <div className="flex flex-row w-full md:w-auto lg:w-1/2 my-8">
        <div className="flex flex-col  p-4 text-[#192841] ms-12">
          <div className="text-2xl font-bold my-4 w-full md:w-auto lg:w-1/2">
            You can create digital ideas that are bigger, bolder, braver and
            better
          </div>
          <div className="text-lg font-light my-4 w-full md:w-auto lg:w-1/2">
            We are a team of creative thinkers and problem solvers dedicated to
            expanding the limits of what is possible by helping brands achieve
            their goals. We utilize our experience working with major global
            corporations to fuel creative innovation that delivers real results.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
