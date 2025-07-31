import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topLine}></div>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3 className={`${styles.title} ${styles.madeWithLove}`}>Made with love by</h3>
                    <p className={`${styles.teamInvicta}`}>Team Invicta</p>
                </div>
                <div className={styles.column}>
                    <nav className={styles.nav}>
                        <a href="/" className={styles.link}>Homepage</a>
                        <a href="/about" className={styles.link}>About</a>
                        <a href="/gallery" className={styles.link}>Gallery</a>
                        <a href="/blog" className={styles.link}>Blog</a>
                    </nav>
                </div>
            </div>
            <div className={styles.container}>
                <div>
                    <p className={styles.title}>Email:</p>
                    <p>
                       invicta.nit.jsr@gmail.com
                        <span className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.svgIcon}>
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </span>
                    </p>
                    <div className={styles.lineContainer}>
                        <hr className={styles.line} />
                    </div>
                </div>
                <div className={styles.socials}>
                    <p className={styles.title}>Our Socials:</p>
                    <div className={styles.socialLinks}>
                        <a href="https://www.instagram.com/quod_invicta_nitjsr?igsh=MW15OXI5NDdybWUxcQ==" className={styles.link}>@Instagram</a>
                        <a href="https://m.facebook.com/quodinvicta" className={styles.link}>@Facebook</a>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.footerBottom}>
                    <div className={styles.copy}>
                        <p>&copy;2024</p>
                    </div>
                    <div className={styles.logoContainer}>
                        <img src="logo.webp" alt="Logo" className={styles.logo} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
