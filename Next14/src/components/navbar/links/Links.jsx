import React from 'react'
import Link from "next/link"
import styles from "./links.module.css"
import  "./navLink/NavLink.jsx"
import NavLink from './navLink/NavLink.jsx'

const Links = () => {

    const links = [
        {
            titles: "Homepage",
            path: "/",
        },
        {
            titles: "About",
            path: "/about",
        },
        {
            titles: "Contact",
            path: "/contact",
        },
        {
            titles: "Blog",
            path: "/blog",
        },
    ];

    // Temporary
    const session = true
    const isAdmin = true

  return (
    <div className={styles.links}>
        {links.map((link => (
            <NavLink item={link} key={link.titles} />
        )))} 
        {session ? (
            <>
                {isAdmin && <NavLink item={{title:"Login", path:"/login"}} />}
                <button>Logout</button>
            </>
        ) : (
            <NavLink item={{title:"Login", path:"/login"}} />
        )}
    </div>
  )
}

export default Links