import { Links } from './links/links';
import styles  from './navbar.module.css';

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                Logo
            </div>
            <div>
                <Links />
            </div>
        </div>
    )
}
