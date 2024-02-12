import Image from "next/image";
import styles from "./postUser.module.css";

// const getDate = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  console.log(userId);
  const user = await getDate(userId);

  return (
    <div className={styles.container}>
      {user.img && (
        <Image
          className={styles.avatar}
          src={user.img ? user.img : "/images/avatar.png"}
          alt=""
          width={50}
          height={50}
        />
      )}
      <div className={styles.texts}>
        <div className={styles.title}>Author</div>
        <div className={styles.username}>{user.username}</div>
      </div>
    </div>
  );
};

export default PostUser;
