import Link from 'next/link'
const NotFound = () => {
    return (
    <div>
        <h2>Not Found
        </h2>
        <p>Sorry, The page you are looking for does not exist.
        </p>
        <Link href={"/"}>Return HomePage</Link>
        </div>
    );
  }
  
  export default NotFound;