import Link from 'next/link'

const NotFound = () =>{
    return (
        <div>
            <h2>Not found</h2>
            <p>Sorry, the page you are looking for dosent exist</p>
            <Link href="/">Return to Homepage</Link>
        </div>
    )
}

export default NotFound