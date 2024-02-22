import Image from "next/image";
import styles from "./single-post.module.css";
import PostUser from "@/features/user-post/user-post";
//import { getPost } from "@/shared/lib/data";
import { Suspense } from "react";

export const generateMetadata = async ({params}) => {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.description,
    image: post.img,
  };
}

const getPost = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`,{next: {revalidate: 3600}});

  if(!res.ok){
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

const SinglePostPage = async ({params}) => {
  const post = await getPost(params.slug);

  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={post.img ? post.img : "/about.png"} alt="" fill className={styles.img} />
        </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
        </div>
        <div className={styles.content}></div>
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default SinglePostPage;