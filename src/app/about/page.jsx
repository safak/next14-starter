import Image from "next/image"
import styles from "./about.module.css"

function AboutPage() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About" fill/>
      </div>
    </div>
  )
}

export default AboutPage