import styles from "./register.module.css";
import React from "react";
import RegisterForm from "@/components/registerForm/registerForm";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
