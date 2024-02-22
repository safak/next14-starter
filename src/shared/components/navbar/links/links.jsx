'use client'

import { useState } from 'react';
import { links } from './constants/links';
import styles from './links.module.css';
import { NavLink } from './nav-link/nav-link';

export const Links = () => {
    const [ isMoblie,  setIsMobile ] = useState(false);

    const session = false;
    const isAdmin = false;

    const handleMobile = () => {
        setIsMobile(prevValue => !prevValue);
    }

    return (
        <div>
        <div className={styles.links}>
            {links.map((link, index) => (
                <NavLink path={link.path} key={link.name}>{link.name}</NavLink>
            ))}
            {isAdmin && session && <NavLink path="/admin">Admin</NavLink>}
            {session ? (<NavLink path="/logout">Logout</NavLink>) : (<NavLink path="/login">Login</NavLink>)}
        </div>
        <button onClick={handleMobile} className={styles.menuButton}> Hamburger </button>
        {
            isMoblie && (
                <div className={styles.mobileLinks}>
                    {links.map((link, index) => (
                        <NavLink path={link.path} key={link.name}>{link.name}</NavLink>
                    ))}
                    {isAdmin && session && <NavLink path="/admin">Admin</NavLink>}
                    {session ? (<NavLink path="/logout">Logout</NavLink>) : (<NavLink path="/login">Login</NavLink>)}
                </div>
            )
        }
        </div>
    )
}