import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// const getDate = async (slug) => {
//   console.log(slug);
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

export const generateMetadata = async ({ params }) => {
  const slug = params.slug;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  }
};

const SinglePostPage = async ({ params }) => {
  const slug = params.slug;
  const post = await getPost(slug);
  console.log(post);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} fill alt="" className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/19748403/pexels-photo-19748403.jpeg"
            alt=""
            width={50}
            height={50}
          />
          {/* <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense> */}
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </div>
          </div>
        </div>

        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
