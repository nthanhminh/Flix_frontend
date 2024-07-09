'use client'

import { useContext, useState } from 'react';
import styles from './styles.module.css'
import Image from 'next/image';
import FoodOption from '../FoodOption/FoodOption';
import FoodList from '../FoodList/FoodList';
import Payment from '../Payment/Payment';
import { Food } from '@/utils/typeOfResponse';
import { GlobalContext } from '@/contexts/GlobalContext';
import orderApi from '@/utils/order';

const FoodPage = ({
    foods,
    combos,
    seats,
    id
} : {
    foods: Food[],
    combos: Food[],
    seats: string[],
    id: number
}) => {

    const {foodList, comboList, selectedSeats, totalPrice, userId, handleNotification} =useContext(GlobalContext)

    const handlePay = async() => {
        try {
            const respone = await orderApi.orderTicket({
                customerId: userId,
                totalPrice: totalPrice.toString(),
                foodIdList: foodList,
                comboIdList: comboList,
                movieScheduleId: id,
                values: selectedSeats
            })

            handleNotification(0,respone);

        } catch (error) {
            handleNotification(1, error)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                CHOOSE CORN AND WATER
            </div>
            <div className={styles.food_list}>
                <FoodList title={"Combo"} list={combos} type={1}></FoodList>
                <FoodList title="HotDog" list={foods} type={2}></FoodList>
            </div>
            <Payment callback={handlePay}></Payment>
        </div>
    )
}

export default FoodPage;


