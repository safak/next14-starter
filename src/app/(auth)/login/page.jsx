import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin, login } from "@/lib/action";
import { auth, signIn } from "@/lib/auth"
import styles from "./login.module.css";
const LoginPage =  () => {

 


  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <form action={handleGithubLogin}>
        <button className={styles.github}>Login with GitHub</button>
      </form>
      <LoginForm/>
    </div>
    </div>
  );
};

export default LoginPage;