import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/postCard.jsx';


const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
      <PostCard/>
      </div>
      <div className={styles.post}>
      <PostCard/>
      </div>
      <div className={styles.post}>
      <PostCard/>
      </div>
      <div className={styles.post}>
      <PostCard/>
      </div>
    </div>
  )
}

export default BlogPage;
