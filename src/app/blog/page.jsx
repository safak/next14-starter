"use client";
import React, { useEffect, useState } from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import Pagination from "@/components/pagination/Pagination";

const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/blog?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  return res.json();
};

const BlogPage = ({ searchParams }) => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const pageNum = parseInt(searchParams.page) || 1;
      const { posts, count } = await getData(pageNum);

      setPosts(posts);
      setCount(count);
      setPage(pageNum);
    };

    fetchData();
  }, [searchParams.page]);

  const POST_PER_PAGE = 6;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <>
      <div className={styles.container}>
        {posts?.map((item) => (
          <div className={styles.post} key={item.id}>
            <PostCard page={page} post={item} key={item.id} />
          </div>
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </>
  );
};

export default BlogPage;
