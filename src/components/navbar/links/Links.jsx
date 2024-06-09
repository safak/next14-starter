"use client"
import Link from "next/link";
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";
const links=[
    {
        title:"HomePage",
        path:"/",
    },
    {
        title:"About",
        path:"/about",
    },
    {
        title:"Gallery",
        path:"/gallery",
    },
    {
        title:"Contact",
        path:"/contact",
    },
    {
        title:"Blog",
        path:"/blog",
    },
];
const Links = ({session}) => {
    const [open,setOpen]=useState(false);
    
    
    //TEMPORARY
    
    const isAdmin=true

    return (
        <div className={styles.container}>
    <div className={styles.links}>
    {links.map((link=>(
        <NavLink item={link} key={link.title}></NavLink>
    )))}
    {session?.user ? (
            <>
                {session.user?.isAdmin && 
                    <NavLink item={{title: "Admin", path:"/admin"}} />}
                    <form action={handleLogout}>
                    <button className={styles.logout}>Logout</button>
                    </form>
                </>
           
        ) : (
            <NavLink item={{title: "Login", path:"/login"}} />
        )}
    </div>
    
    <Image className={styles.menuButton} src="/menu.svg" alt="" width={30} height={30} onClick={() => setOpen((prev)=>!prev)} ></Image>
    {
        open && <div className={styles.mobileLinks}>
        {links.map ((link) => (
            <NavLink item={link} key={link.title}/>
           
        ))}
        {session?.user ? (
            <>
                {session.user?.isAdmin && 
                    <NavLink item={{title: "Admin", path:"/admin"}} />}
                    <form action={handleLogout}>
                    <button className={styles.logout}>Logout</button>
                    </form>
                </>
           
        ) : (
            <NavLink item={{title: "Login", path:"/login"}} />
        )}
        </div>
    }
    </div>
  )
}

export default Links