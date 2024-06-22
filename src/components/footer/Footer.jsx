import styles from "./footer.module.css";

const Footer = () => {
return (
<div className={styles.container}>
    <div className={styles.logo}>ParkEase</div>
    <div className={styles.text}>
    Hasle-free parking gateway © All rights reserved.
    </div>
</div>
);
};

export default Footer;