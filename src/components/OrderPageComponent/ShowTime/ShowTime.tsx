'use client'

import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css'
import TicketOption from '../TicketOption/TicketOption';
import FoodPage from '../FoodPage/FoodPage';
import { Combo, Food, MovieSchedule, MovieScheduleDate, Ticket } from '@/utils/typeOfResponse';
import movieApi from '@/utils/movieApi';
import { GlobalContext } from '@/contexts/GlobalContext';

const ShowTime = ({
    movieScheduleDate,
    prices,
    food,
    combo
} : {
    movieScheduleDate: MovieScheduleDate,
    prices: Ticket[],
    food: Food[],
    combo: Combo[],
}) => {

    const rows:string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];
    const seats = Array.from({ length: 10 }, (_, index) => `A${index + 1}`);
    const seatsPerRow:number = 9
    // const [selectedSeat, SetSelectedSeat] =useState<string[]>([])
    const [selectedDate, setSelectedDate] = useState<string>('')
    const [selectedTime, setSelectedTime] = useState<number>(-1)
    const [diableSeats, setDisabledSeats] = useState<string[]>([])
    const {selectedSeats, setSelectedSeats, numberOfSeats} = useContext(GlobalContext)

    useEffect(() => {
        const fetchData = async() =>{
            if(selectedTime!==-1){
                const response = await movieApi.fetchDataAbouSeat(selectedTime)
                setDisabledSeats(response)
            }
        }

        fetchData()
    }, [selectedTime])

    useEffect(() => {
        console.log(diableSeats)
    }, [diableSeats])

    useEffect(() => {
        console.log(selectedSeats)
    }, [selectedSeats])

    // const addSeat = (value:string):void => {
    //     const tmpListSeat:string[] = selectedSeat
    //     tmpListSeat.push(value)
    //     SetSelectedSeat(tmpListSeat)
    // }

    const handleChooseSeat = (value:string):void => {
        let tmp: string[] = [...selectedSeats]
        if(numberOfSeats === tmp.length){
            tmp.shift()
        }
        if(!tmp.includes(value) && tmp.length < numberOfSeats){
            tmp.push(value)
        }
        setSelectedSeats(tmp)
    }

    const handeDateGetDay = (dateStr: string): string =>{
        const date = new Date(dateStr);
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayIndex = date.getDay();
        return daysOfWeek[dayIndex];
    }

    const handleStringDate = (dateStr: string) : string => {
        const list = dateStr.split('-');
        return `${list[2]}/${list[1]}`
    }

    const handleSelectedDate = (date: string) => {
        setSelectedDate(date)
        setSelectedTime(-1)
    }

    const handleSelectedTime = (id: number) => {
        setSelectedTime(id)
    }

    return (
        <div className={styles.showTime}>
                <div className={styles.showTime_header}>
                    Showtimes
                </div>
                <div className={styles.showTime_list}>
                    {/* <div className={`${styles.showTime_item} ${styles.showTime_item_selected}`}>
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
                    </div> */}
                    {
                        Object.keys(movieScheduleDate).map((key) => {
                            return (
                                <div className={`${styles.showTime_item} ${key === selectedDate ? styles.showTime_item_selected : ''}`} key={key} onClick={() => {handleSelectedDate(key)}}>
                                    <div className={`${styles.showTime_item_date}`}>
                                        {/* 29/06 */}
                                        {handleStringDate(key)}
                                    </div>
                                    <div className={styles.showTime_item_day}>
                                        {/* Saturday */}
                                        {handeDateGetDay(key)}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <> */}
                {selectedDate !== '' ? (
                    <div className={styles.detail_time_container}>
                        <div className={styles.detail_time_list}>
                            {
                                movieScheduleDate[selectedDate].map((date: MovieSchedule) => {
                                    return (
                                        <div className={`${styles.detail_time_item} ${selectedTime === date.id ? styles.detail_time_item_selected : ''}`} key={date.id} onClick={() => {handleSelectedTime(date.id)}}>
                                            {
                                                `${date.hour} : ${date.minute}`
                                            }
                                        </div>
                                    )
                                })
                            }
                            {/* <div className={styles.detail_time_item}>
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
                            </div> */}
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {
                    selectedTime !== -1 ? (
                        <div className={styles.select_ticket_container}>
                    <div className={styles.select_ticket_header}>
                        SELECT TICKET TYPE
                    </div>
                    <div className={styles.select_ticket_list}>
                        {/* <TicketOption></TicketOption>
                        <TicketOption></TicketOption> */}
                        {
                            prices.map((price) => {
                                return (
                                    <TicketOption key={price.type} item={price}></TicketOption>
                                )
                            })
                        }
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
                                <div
                                    key={`${row}${index + 1}`}
                                    className={`${styles.seat_item}
                                                ${diableSeats.includes(`${row}${index + 1}`) ? styles.seat_item_disable : ""}
                                                ${selectedSeats.includes(`${row}${index + 1}`) ? styles.seat_item_selected : ""}`}
                                    onClick={() => handleChooseSeat(`${row}${index + 1}`)}
                                >
                                    {`${row}${index + 1}`}
                                </div>
                            ))}
                            </div>
                        ))}
                        </div>
                    </div>
                    {/* <FoodPage foods={[]} combos={[]}/> */}
                    <FoodPage foods={food} combos={combo} seats={[]} id={selectedTime}/>
                </div>
                    ) : (
                        <></>
                    )
                }
                {/* <FoodPage foods={food} combos={combo} seats={[]} id={selectedTime}/> */}
                {/* <div className={styles.select_ticket_container}>
                    <div className={styles.select_ticket_header}>
                        SELECT TICKET TYPE
                    </div>
                    <div className={styles.select_ticket_list}>
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
                                <div key={`${row}${index + 1}`} className={`${styles.seat_item} ${diableSeats.includes(`${row}${index + 1}`) ? styles.seat_item_disable : ""}`}>
                                    {`${row}${index + 1}`}
                                </div>
                            ))}
                            </div>
                        ))}
                        </div>
                    </div>
                    <FoodPage />
                </div> */}
            </div>
    )
}

export default ShowTime