import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-[#031d1e] py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex flex-col ms-12">
            <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
            <p className="mb-4">
              Subscribe for the latest blog posts and updates
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white border-b-2 border-white py-2 px-3 flex-grow"
              />
              <button
                type="submit"
                className="bg-transparent border border-white text-white py-2 px-4 ml-4 rounded hover:bg-white hover:text-black transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex flex-col md:items-end mt-6 md:mt-0">
            <div className="flex space-x-8 mb-4 mr-4">
              <p className="cursor-pointer hover:underline">About Us</p>
              <p className="cursor-pointer hover:underline">Categories</p>
              <p className="cursor-pointer hover:underline">Contact</p>
              <p className="cursor-pointer hover:underline">FAQ</p>
              <p className="cursor-pointer hover:underline">Contribute</p>
            </div>
            <div className="flex space-x-8 mt-12 mr-48">
              <a
                href="http://www.w3.org/2000/svg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/fb.png" alt="Facebook" className="w-6" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/inster.png" alt="Twitter" className="w-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/apple.png" alt="YouTube" className="w-6" />
              </a>
              <a
                href="https://apple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/yt.png" alt="Apple" className="w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 ms-12">
          <p className="text-center text-sm mb-6">
            At BlogApp, we are committed to creating an inclusive and engaging
            platform. We continually strive to improve accessibility and user
            experience for all our visitors. If you have any feedback or need
            assistance, please contact us.
          </p>
          <small className="block text-center text-sm">
            Copyright © 2024 BlogApp.com | Privacy Policy | Terms of Use
          </small>
        </div>
      </div>
    </div>
  );
}
