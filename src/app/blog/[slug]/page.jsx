
import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import { getUser } from "@/lib/data";
import ScrollToTop from "react-scroll-to-top";
import moment from 'moment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//FETCH DATA WITH API
const getData = async (slug) => {
  const res = await fetch(`https://quod-invicta.vercel.app/api/blog/${slug}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
}

const SinglePostPage = async ({ params }) => {

  const { slug } = params;
  const post = await getData(slug);
  const date = moment(post.createdAt);

  //  const post = await getPost(slug);
  return (
    <div className={styles.container} >

      {post.img && (

        <div className={styles.imgContainer}>
          <Card sx={{ maxWidth: 1000 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                width="100"
                image={post.img}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          {/* <img className={styles.img} src={post.img} alt="" ></img> */}
        </div>

      )}
      <div className={styles.textConatiner}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {/* <Image src={user.img} alt="" className={styles.avatar} width={50} height={50}></Image> */}
          {post &&
            (<Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>)}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {/* {post.createdAt.toString().slice(4, 16)} */}


              {date.zone("+05:30").format("DD-MM-YYYY, hh:mm:ss A")}
            </span>
          </div>
        </div>

        <div className={styles.content}>
          
            {post.desc}
          
        </div>




      </div>
    </div>
  )
}

export default SinglePostPage