'use client'

import { useState } from 'react';
import styles from './styles.module.css'
import Image from 'next/image';
import FoodOption from '../FoodOption/FoodOption';
import FoodList from '../FoodList/FoodList';
import Payment from '../Payment/Payment';

const FoodPage = () => {

    const [counter, setCounter] = useState<number>(0);
    
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                CHOOSE CORN AND WATER
            </div>
            <div className={styles.food_list}>
                <FoodList title={"Combo"}></FoodList>
                <FoodList title="HotDog"></FoodList>
            </div>
            <Payment></Payment>
        </div>
    )
}

export default FoodPage;


