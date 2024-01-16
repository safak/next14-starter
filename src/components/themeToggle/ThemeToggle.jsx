"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);

  const { toggle = () => {}, theme = "light" } = themeContext || {};

  const backgroundColor = theme === "dark" ? "white" : "#0f172a";

  const containerStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className={styles.container} onClick={toggle} style={containerStyle}>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
