import Link from "next/link";
const NotFound = () => {
    return (
        <div>
            <h2>Not Found.</h2>
            <p>Sorry, the page you are looking doesn't exist</p>
            <Link href="/">Go back to Home</Link>
        </div>
    )
}

export default NotFound