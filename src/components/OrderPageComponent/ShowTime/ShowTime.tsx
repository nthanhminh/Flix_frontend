'use client'

import { useState } from 'react';
import styles from './styles.module.css'
import TicketOption from '../TicketOption/TicketOption';
import FoodPage from '../FoodPage/FoodPage';

const ShowTime = () => {

    const rows:string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];
    const seats = Array.from({ length: 10 }, (_, index) => `A${index + 1}`);
    const seatsPerRow:number = 9
    const [selectedSeat, SetSelectedSeat] =useState<string[]>([])

    const addSeat = (value:string):void => {
        const tmpListSeat:string[] = selectedSeat
        tmpListSeat.push(value)
        SetSelectedSeat(tmpListSeat)
    }

    console.log(seats)

    return (
        <div className={styles.showTime}>
                <div className={styles.showTime_header}>
                    Showtimes
                </div>
                <div className={styles.showTime_list}>
                    <div className={`${styles.showTime_item} ${styles.showTime_item_selected}`}>
                        <div className={styles.showTime_item_date}>
                            29/06
                        </div>
                        <div className={styles.showTime_item_day}>
                            Saturday
                        </div>
                    </div>
                    <div className={styles.showTime_item}>
                        <div className={styles.showTime_item_date}>
                            29/06
                        </div>
                        <div className={styles.showTime_item_day}>
                            Saturday
                        </div>
                    </div>
                    <div className={styles.showTime_item}>
                        <div className={styles.showTime_item_date}>
                            29/06
                        </div>
                        <div className={styles.showTime_item_day}>
                            Saturday
                        </div>
                    </div>
                </div>
                <div className={styles.detail_time_container}>
                        <div className={styles.detail_time_list}>
                            <div className={styles.detail_time_item}>
                                15:30
                            </div>
                            <div className={styles.detail_time_item}>
                                15:30
                            </div>
                            <div className={styles.detail_time_item}>
                                15:30
                            </div>
                            <div className={styles.detail_time_item}>
                                15:30
                            </div>
                            <div className={styles.detail_time_item}>
                                15:30
                            </div>
                            <div className={styles.detail_time_item}>
                                15:30
                            </div>
                            <div className={styles.detail_time_item}>
                                15:30
                            </div>
                            
                        </div>
                </div>
                <div className={styles.select_ticket_container}>
                    <div className={styles.select_ticket_header}>
                        SELECT TICKET TYPE
                    </div>
                    <div className={styles.select_ticket_list}>
                        {/* <div className={styles.select_ticket_item}>
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
                                <div className={`${styles.select_ticket_counter_item} ${styles.select_ticket_click}` }>
                                    -
                                </div>
                                <div className={styles.select_ticket_counter_item}>
                                    {counter}
                                </div>
                                <div className={`${styles.select_ticket_counter_item} ${styles.select_ticket_click}`}>
                                    +
                                </div>
                            </div>
                        </div>
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
                                <div className={styles.select_ticket_counter_item}>
                                    -
                                </div>
                                <div className={styles.select_ticket_counter_item}>
                                    {counter}
                                </div>
                                <div className={styles.select_ticket_counter_item}>
                                    +
                                </div>
                            </div>
                        </div> */}
                        <TicketOption></TicketOption>
                        <TicketOption></TicketOption>
                    </div>
                    <div className={styles.seat_container}>
                        <div className={styles.seat_header}>
                            SCREEN
                        </div>
                        <div className={styles.seat_list}>
                        {rows.map((row) => (
                        <div key={row} className={styles.seat_row}>
                            <div className={styles.seat_label}>{row}</div>
                            {Array.from({ length: seatsPerRow }, (_, index) => (
                                <div key={`${row}${index + 1}`} className={styles.seat_item}>
                                    {`${row}${index + 1}`}
                                </div>
                            ))}
                            </div>
                        ))}
                        </div>
                    </div>

                    <FoodPage />

                    {/* <div className={styles.food_container}>
                        
                    </div> */}
                </div>
            </div>
    )
}

export default ShowTime