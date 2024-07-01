'use client'
import { useState } from 'react'
import styles from './styles.module.css'

const Payment = () => {

    const [sum, setSum] = useState<number>(0)

    return (
        <div className={`${styles.payment_container} ${sum === 0 ? styles.disable : ''}`}>
            <div className={styles.payment_amount}>
                Provisional: 35,000 VND
            </div>
            <div className={styles.payment_btn}>
                Pay
            </div>
        </div>
    )
}
export default Payment