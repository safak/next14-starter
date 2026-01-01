import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound