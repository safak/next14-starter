import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    // 404ページに以下が表示される
    <div>
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}

export default NotFound;
