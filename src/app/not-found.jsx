
import Link from "next/link"
const NotFound = () => {
  return (
    <div>
    <h2>Not Found</h2>
    <p>The Page doesn&apos;t exist!</p>
    <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound