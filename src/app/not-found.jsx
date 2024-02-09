import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>NotFound</h2>
      <p>Sorry, the page you are lookking for does not exist.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
