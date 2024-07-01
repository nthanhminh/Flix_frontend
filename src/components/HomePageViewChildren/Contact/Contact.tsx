import styles from './styles.module.css'
import Image from 'next/image'
const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                Contact
            </div>
            <div className={styles.contact_form}>
                <div className={styles.contact_header}>
                    Contact Infomation
                </div>
                <div className={styles.item}>
                    <Image src="/icons/email-marketing.png" alt='' width={18} height={18}></Image>
                    <div className={styles.name}>marketing.mcinema@gmail.com</div>
                </div>
                <div className={styles.item}>
                    <Image src="/icons/telephone.png" alt='' width={18} height={18}></Image>
                    <div className={styles.name}>012 3456 7890</div>
                </div>
                <div className={styles.item}>
                    <Image src="/icons/placeholder.png" alt='' width={18} height={18}></Image>
                    <div className={styles.name}>Sydney, Australia</div>
                </div>
                <div className={styles.name_input}>
                    <input className={styles.input_name} type="text" placeholder='Name'/>
                </div>
                <div className={styles.email_input}>
                    <input className={styles.input_email} type="text" placeholder='Email'/>
                </div>
                <div className={styles.response_input}>
                    <textarea className={styles.input_response} placeholder='Respone'/>
                </div>
                <div className={styles.submit}>
                    Submit
                </div>
            </div>
        </div>
    )
}

export default Contact