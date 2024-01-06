import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";

// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Bir şeyler yanlış gitti");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // const user = await getData(userId);
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user?.username}</span>
    </div>
  );
};

export default PostUser;
