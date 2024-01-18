import { Suspense } from "react";
import styles from "./admin.module.css";
import { auth } from "@/lib/auth";
import AdminPosts from "@/components/adminPosts/page";
import AdminPostForm from "@/components/adminPostForm/page";
import AdminUsers from "@/components/adminUsers/page";
import AdminUserForm from "@/components/adminUserForm/page";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
