'use client'

import { useContext, useState } from 'react';
import styles from './styles.module.css'
import { Ticket } from '@/utils/typeOfResponse';
import { GlobalContext } from '@/contexts/GlobalContext';

const TicketOption = ({
    item
} : {
    item: Ticket
}) => {

    const {numberOfSeats, setNumberOfSeats, setTotalPrice, totalPrice} = useContext(GlobalContext)
    const handleMinus = () => {
        if(numberOfSeats > 0) {
            setNumberOfSeats(numberOfSeats-1)
            setTotalPrice(totalPrice - parseInt(item.price))
        }
    }

    const hanldeAdd = () => {
        setNumberOfSeats(numberOfSeats+1)
        setTotalPrice(totalPrice + parseInt(item.price))
    }

    

    return (
        <div className={styles.select_ticket_item}>
            <div className={styles.select_ticket_name}>
                {item.name}
            </div>
            <div className={styles.select_ticket_type}>
                {item.type}
            </div>
            <div className={styles.select_ticket_price}>
                {item.price} VNĐ
            </div>
            <div className={styles.select_ticket_counter}>
                <div onClick={() => {handleMinus()}} className={`${styles.select_ticket_counter_item} ${styles.select_ticket_click}` }>
                    -
                </div>
                <div className={styles.select_ticket_counter_item}>
                    {numberOfSeats}
                </div>
                <div onClick={() => {hanldeAdd()}} className={`${styles.select_ticket_counter_item} ${styles.select_ticket_click}`}>
                    +
                </div>
            </div>
        </div>
    )
}

export default TicketOption