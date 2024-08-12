import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgConatiner}>
          <Image src="/contact.png" alt="" width={300} height={300} className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.tittle}>Title</h1>
        <p className={styles.desc}>Hoje, em Santa Catarina, o clima está ameno, com sol entre nuvens, propício para atividades ao ar livre e turismo.</p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard