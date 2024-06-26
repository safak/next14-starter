import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                Venkatesh
            </div>
            <div className={styles.text}>
                Venkatesh creative thoughts ageence copyright included
            </div>
        </div>
    )
}

export default Footer