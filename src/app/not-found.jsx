import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found 404</h2>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
