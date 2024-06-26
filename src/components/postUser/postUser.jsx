import Image from "next/image";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        className={styles.avatar}
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
