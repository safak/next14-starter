import styles from './singlePost.module.css';
import Image from 'next/image';

const SlugBlogPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="Placeholder" width={300} height={300}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Blog Title</h1>
                <div className={styles.detail}>
                    <Image src="/favicon.ico" alt="Avatar" width={50} height={50}/>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jeferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                Hoje, em Santa Catarina, o clima está ameno, com sol entre nuvens, propício para atividades ao ar livre e turismo.
                </div>
            </div>
        </div>
    );
};

export default SlugBlogPage;