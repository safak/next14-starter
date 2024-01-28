import React from 'react'
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.text}>
        Logo creative thoughts agency © all rights reserved.
      </div>
    </div>
  )
}

export default Footer
