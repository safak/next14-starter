import Image from "next/image";
import styles from "./contact.module.css";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
export const metadata = {
  title: {
    default: "Contact Page",
    template: "%s | Quod Invicta"
  },
  description: 'The Official Webpage for Quod Invicta',
}


const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src="/contact.jpg" alt=""  className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
        <form action="mailto:invicta.nit.jsr@gmail.com" method="post" enctype="text/plain" 
        className={styles.form}>
          <input type="text" name="Name" placeholder="Name and Surname"></input>
          <input type="email" name="E-Mail" placeholder="Email Address"></input>
          <input type="text" name="Phone Number" placeholder="Phone Number"></input>
          <textarea name="Message" id="" cols="30" rows="10" type="text" placeholder="Message"></textarea>
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>Send</Button>
          {/* <button type="submit">Send</button> */}
        </form> 
      </div>
    </div>
  )
}

export default ContactPage