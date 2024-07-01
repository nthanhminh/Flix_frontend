'use client'

import { useState } from 'react';
import styles from './styles.module.css'

const TicketOption = () => {

    const [counter, setCounter] = useState<number>(0);

    const handleMinus = () => {
        if(counter > 0) {
            setCounter(counter-1)
        }
    }

    const hanldeAdd = () => {
        setCounter(counter+1)
    }

    

    return (
        <div className={styles.select_ticket_item}>
            <div className={styles.select_ticket_name}>
                Adult
            </div>
            <div className={styles.select_ticket_type}>
                Single
            </div>
            <div className={styles.select_ticket_price}>
                75,000 VNĐ
            </div>
            <div className={styles.select_ticket_counter}>
                <div onClick={() => {handleMinus()}} className={`${styles.select_ticket_counter_item} ${styles.select_ticket_click}` }>
                    -
                </div>
                <div className={styles.select_ticket_counter_item}>
                    {counter}
                </div>
                <div onClick={() => {hanldeAdd()}} className={`${styles.select_ticket_counter_item} ${styles.select_ticket_click}`}>
                    +
                </div>
            </div>
        </div>
    )
}

export default TicketOption