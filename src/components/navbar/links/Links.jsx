// import Link from "next/link"
"use client";
import { useState } from "react";
import styles from "./link.module.css"
import NavLink from "./navLink/navLink";
const links = [

    {title: "HomePage", 
        path: "/",
    },
    
    {title: "About",
        path: "/about",
    },
    
    {   title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
        ];
    
        
const Links = () => {
    const [open,setOpen] = useState(false);
   
       
// temporary 
const session = true;
const isAdmin = false;

    return (
        <div className={styles.container}>
 <div className={styles.links}>
           {links.map((link=> (
            <NavLink item={link} key={link.title}/> 
          
           )))}  {
            session ? ( 
              <>
             { isAdmin && <NavLink item={{title: "Admin", path: "/admin"}} /> }
             <button className={styles.logout}>Logout</button>
              </>   
            ) : (
                 <NavLink item={{title: "Login", path: "/login"}} /> 
            )
           }
        </div>
        <button className={styles.menuButton} onClick={()=> setOpen((prev) => !prev)}>Menu</button>
        {
    open && (<div className={styles.mobileLinks}>
    { links.map((link) => ( <NavLink item={link} key={link.title}/> ))}
    </div>)}
        </div>
           );
  };
  
  export default Links;