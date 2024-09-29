"use client";
import Image from "next/legacy/image";
import styles from "./contact.module.css";
// import dynamic from "next/dynamic";

// динамический импорт компонента в серверный компонент
// import HydrationTest from "@/components/hydrationTest/HydrationTest";
// const HydrationTestNoSSR = dynamic(
//   () => import("@/components/hydrationTest/HydrationTest"),
//   { ssr: false }
// );

function ContactPage() {
  // const a = Math.random();
  // console.log(a);
  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  // const a = Math.random();
  // console.log(a);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          alt=""
          src="/contact.png"
          layout="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.formContainer}>
        {/* {isClient && a} */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        {/* <HydrationTestNoSSR /> */}
        <form action="" className={styles.form}>
          <input
            className={styles.inp}
            type="text"
            placeholder="Name and Surname"
          />
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Name and Surname" />
          <textarea name="" id="" cols="10" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
