import  Link  from 'next/link';

const NotFound = () => {
    return(
        <div>
            <h2>Not Found</h2>
            <p>Sorry ,the page you are looking for dose not exist.</p>
            <Link href="/">Return Homepage</Link>
        </div>
    )
}

export default NotFound