import { usePathname } from 'next/navigation'
import styles from './navLink.module.css'
import Link from 'next/link'

const NavLink = ((item)) => {

   const pathName = usePathname();

    return (
       <Link href={item.path} className={`${style.container}`}>
        {item.title}
        </Link>
    )
}
export default NavLink