import styles from './styles.module.css'
import Image from 'next/image'

const Services = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                ALL THE ENTERTAINMENT
            </div>
            <div className={styles.description}>
                In addition to the high-quality cinema system, Cinestar also provides you with many other great types of entertainment.
            </div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <Image className={styles.image} src="/services/kid.png" alt='' width={120} height={90} unoptimized></Image>
                </div>
                <div className={styles.item}>
                    <Image className={styles.image}src="/services/service2.png" alt='' width={120} height={90} unoptimized></Image>
                </div>
                <div className={styles.item}>
                    <Image className={styles.image} src="/services/services3.png" alt='' width={120} height={90} unoptimized></Image>
                </div>
            </div>
        </div>
    )
}

export default Services