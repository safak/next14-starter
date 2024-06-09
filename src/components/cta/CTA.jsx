"use client"
import React from 'react'
import styles from "./cta.module.css"
import Link from 'next/link'
import { Button } from '@mui/material'

const CTA = () => {
  return (
    <div className={styles.container} >

      <div className={styles.info}>
        <div className={styles.title}>
          <h1>Team Quod Invicta’s Behind-The-Scenes Video: a snapshot of fashion’s flair and unity at NIT Jamshedpur.</h1>
        </div>
        <div className={styles.btnGroup}>
          {/* <button onClick="/register" className={styles.btn}>Register</button> */}
          {/* <input  className={styles.btn} type="button" onclick="location.href='/register';" value="Register" /> */}
          {/* <Link href="/register"> <button className={styles.btn}>Register</button> </Link> */}
          <Button size="large" href="/register" variant="contained" color="success">
            Register
          </Button>
        </div>
      </div>

      <div className={styles.videoContainer}>
        <iframe
          width="400"
          height="315"
          src="https://www.youtube.com/embed/Wm311iK9KlE?si=uZOPAyCi1iUCbKb6"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  )
}

export default CTA