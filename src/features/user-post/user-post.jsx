import { getUser } from "@/shared/lib/data";
import styles from "./user-post.module.css";
import Image from "next/image";


const PostUser = async ({ userId }) => {
const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        alt=""
        width={50}
        height={50}
        src={user.img ? user.img : "/about.png"}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;