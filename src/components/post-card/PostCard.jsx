"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }) {
  const [loading, setLoading] = useState(true);
  const date = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-2 animate-pulse">
        <section className="flex relative gap-2 items-center">
          <div className="relative flex-1 h-96 bg-gray-300 rounded-sm"></div>
          <span className="rotate-270 w-10 text-gray-400 bg-gray-300 h-4"></span>
        </section>
        <section className="flex flex-col gap-3 w-[calc(100%-2.5rem)] mt-2">
          <div className="h-4 bg-gray-200 rounded-full w-full"></div>
          <div className="h-4 bg-gray-200 rounded-full w-full"></div>
          <div className="h-4 bg-gray-200 rounded-full w-4/5"></div>
          <div className="h-5 bg-gray-200 rounded-full w-20"></div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <section className="flex relative gap-2 items-center">
        <div className="relative w-[95%] h-96">
          <Image
            src={post.image}
            alt="blog image"
            fill
            className="object-cover"
          />
        </div>
        <span className="rotate-text text-gray-400">{date}</span>
      </section>
      <section className="flex flex-col gap-2 w-[calc(100%-2.5rem)]">
        <h2 className="font-bold text-xl line-clamp-2">{post.title}</h2>
        <p className="text-txt-soft line-clamp-3 text-[.9rem]">
          {post.content}
        </p>
        <Link className="underline text-[1rem]" href={`/blog/${post.id}`}>
          READ MORE
        </Link>
      </section>
    </div>
  );
}
