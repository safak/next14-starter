"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Footer from "./../../components/footer/Footer";
import HowItWorks from "../../components/HowItWorks";
import Image from "next/image";
import Link from "next/link";

const AboutPage: React.FC = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    )
      .fromTo(
        imageRef.current,
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
        "-=1"
      )
      .fromTo(
        missionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
  }, []);
  return (
    <div>
      <div className="flex flex-col lg:flex-row mt-4 bg-[#9e9e92] ">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="text-black max-w-lg">
            <h1
              ref={titleRef}
              className="text-4xl text-[#ffffff] font-medium my-8 flex justify-center"
              style={{
                textShadow: `
      1px 1px 0 #343833,
      -1px -1px 0 #343833,
      1px -1px 0 #343833,
      -1px 1px 0 #343833,
      0 1px 0 #343833,
      1px 0 0 #343833,
      0 -1px 0 #343833,
      -1px 0 0 #343833
    `,
              }}
            >
              Color The World
            </h1>
            <h1 className="text-2xl font-light text-white my-8 flex justify-center ">
              Where creativity meets community
            </h1>

            <p className="text-lg font-light my-4 ms-12r ">
              Dynamic space designed for storytellers, thinkers, and creators to
              share their voice with the world. Whether you are passionate about
              writing, eager to share your experiences, or simply want to
              connect with a like-minded community, our platform offers the
              tools you need to express yourself.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/createBlog">
                <button className="bg-white text-[#343833] px-4 py-2 rounded-lg mb-12">
                  Create a blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div ref={imageRef} className="w-full lg:w-1/2">
          <Image
            src="/1234.png"
            alt="about"
            width={500}
            height={300}
            className="rounded-lg w-full sm:h-[500px] h-auto mr-8"
          />
        </div>
      </div>

      <HowItWorks />

      <div ref={missionRef} className="py-12 bg-[#d5ede6] mb-8">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#333]">
            Our Mission
          </h2>
          <p className="text-lg text-center text-gray-800 mx-auto max-w-3xl leading-relaxed">
            Our mission is to empower individuals to share their stories and
            ideas with a global audience. We strive to create an inclusive and
            engaging platform where creativity thrives and diverse voices are
            heard. By fostering a supportive community and providing the tools
            necessary for expression, we aim to inspire and connect people from
            all walks of life.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
