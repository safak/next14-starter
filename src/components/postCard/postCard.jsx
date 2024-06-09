import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import moment from 'moment';
import { Button } from "@mui/material";
const PostCard = ({ post }) => {


  const date = moment(post.createdAt);
  

function truncateString(str, maxLength) { 
  if (str.length > maxLength) { 
      return str.slice(0, maxLength - 3) + '...'; 
  } 
  return str; 
} 

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img}></Image>
        </div>}
        <span className={styles.date}>
          {/* {post.createdAt.toString().slice(4, 16)} */}
          {date.zone("+05:30").format("DD-MM-YYYY, hh:mm:ss A")}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 classname={styles.title}>{post.title}</h1>
        
        <p className={styles.desc}>{truncateString(post.desc, 35)}</p>
        {/* <Link className={styles.link} href={`/blog/${post.slug}`}>Read More</Link> */}
        <Button variant="contained" href={`/blog/${post.slug}`}>
          Read More
        </Button>
      </div>
    </div>
  )
}

export default PostCard