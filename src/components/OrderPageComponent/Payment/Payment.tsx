'use client'
import { useContext, useState } from 'react'
import styles from './styles.module.css'
import { GlobalContext } from '@/contexts/GlobalContext'

const Payment = ({
    callback,
} : {
    callback: Function,
}) => {

    const {totalPrice, setTotalPrice} = useContext(GlobalContext)

    return (
        <div className={`${styles.payment_container} ${totalPrice === 0 ? styles.disable : ''}`}>
            <div className={styles.payment_amount}>
                Provisional: {totalPrice} VND
            </div>
            <div className={styles.payment_btn} onClick={() => {
                callback()
            }}>
                Pay
            </div>
        </div>
    )
}
export default Payment