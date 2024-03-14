import Link from "next/link";
import styles from "./links.module.css"
import NavLink from "./navLink/navLinks";

const Links = () => {
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    return (
        <div className={styles.links}>
            {links.map((link => (
               <NavLink item={link} key={link.title} />
            )))}
        </div>
    )
}
export default Links