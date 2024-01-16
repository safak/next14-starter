import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import Pagination from "@/components/pagination/Pagination";

export const metadata = {
  title: "Blog Page",
  description: "Contact description",
};

const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/blog?page=${page}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Bir şeyler yanlış gitti");
  }
  return res.json();
};

const BlogPage = async ({ page }) => {
  const { posts, count } = await getData(page);
  const POST_PER_PAGE = 6;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <>
      <div className={styles.container}>
        {posts.map((item) => (
          <div className={styles.post} key={item.id}>
            <PostCard post={item} key={item.id} />
          </div>
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </>
  );
};

export default BlogPage;
