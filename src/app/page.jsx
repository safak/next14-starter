import Image from "next/image";
import styles from "./home.module.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '@/components/carousel/Carousel'
import Carousel2 from '@/components/carousel/Carousel2'
import Link from "next/link";
import Testimonials from "@/components/testimonials/testimonials";
import CTA from "@/components/cta/CTA";
import { Button } from "@mui/material";


const Home = () => {
  return <div>
  <div className={styles.container}>
  
    <div className={styles.textContainer}>
      <h1 className={styles.title}>The Official Fashion Club Of NIT Jamshedpur</h1>

      <p className={styles.desc}>
        Quod Invicta, NIT Jamshedpur&apos;s Official Fashion Club, is a hub of creativity and style. It&apos;s where fashion meets passion, and diversity is celebrated. Inspiring personal style, one event at a time.
      </p>
      <div className={styles.buttons}>
        {/* <Link href="/about"> <button className={styles.button}>Learn More</button> </Link>
        <button className={styles.button}><Link href="/contact">Contact</Link></button>  */}
        <Button size="large" href="/about" variant="contained">Learn More</Button>
        <Button size="large" href="/contact" variant="outlined">Contact</Button>

      </div>
      <div className={styles.brands}>
       <Link href="https://linktr.ee/quodinvicta"> <Image src="/brands2.png" alt="brands" fill className={styles.brandImg} /> </Link>
      </div>
    </div>

    <div className={styles.imgContainer}>
      <Image src="/hero3.png" alt="hero" fill className={styles.heroImg} />
    </div>
  </div>

    {/* <Carousel /> */}
    <Carousel2/>
    <Testimonials/>
    <CTA/>
  </div>;
};

export default Home;