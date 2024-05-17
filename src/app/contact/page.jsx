import styles from './contact.module.css'
import Image from 'next/image'

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
        <form action=""  className={styles.form}>
          <input placeholder='First Name' type='text'></input>
          <input placeholder='Email' type='text'></input>
          <input placeholder='Phone Number (optional)' type='text'></input>
          <textarea name="" cols="30" rows="10" placeholder='Message'></textarea>
          <button>Send</button>
        </form>
      </div>

    </div>
  )
}

export default ContactPage