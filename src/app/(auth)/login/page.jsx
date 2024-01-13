import {
  handleFacebookLogin,
  handleGithubLogin,
  handleGoogleLogin,
} from "@/lib/action";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>
            <Image
              src="/github.svg"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            Login with Github
          </button>
        </form>
        <form action={handleGoogleLogin}>
          <button className={styles.github}>
            <Image
              src="/google.svg"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            Login with Google
          </button>
        </form>
        <form action={handleFacebookLogin}>
          <button className={styles.github}>
            <Image
              src="/facebook.svg"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            Login with Facebook
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
