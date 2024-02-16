import { Links } from './links/links';
import Link  from 'next/link';
import styles  from './navbar.module.css';

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">IT</Link>
            </div>
            <div>
                <Links />
            </div>
        </div>
    )
}
