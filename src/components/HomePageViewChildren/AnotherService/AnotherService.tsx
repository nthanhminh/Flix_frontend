import styles from './AnottherService.module.css'
import Image from 'next/image';
const AnotherService = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>                
                MEMBERSHIP PROGRAM
            </div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <div className={styles.image_container}>
                        <Image className={styles.image} src="/images/cmember.png" alt='' width={120} height={120} unoptimized></Image>
                    </div>
                    <div className={styles.name}>
                        M-Friend Member
                    </div>
                    <div className={styles.description}>
                        M-Friend card offers many incentives for new members
                    </div>
                    <div className={styles.exploreBtn}>
                        Find out now
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.image_container}>
                        <Image className={styles.image} src="/images/cmember.png" alt='' width={0} height={0} unoptimized></Image>
                    </div>
                    <div className={styles.name}>
                        M-Friend Member
                    </div>
                    <div className={styles.description}>
                        M-Friend card offers many incentives for new members
                    </div>
                    <div className={styles.exploreBtn}>
                        Find out now
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnotherService;