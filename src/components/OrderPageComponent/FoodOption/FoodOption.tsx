'use client'

import { useState } from 'react';
import styles from './styles.module.css'
import Image from 'next/image'

const FoodOption = () => {

    const [counter, setCounter] = useState<number>(0);

    const handleMinusAction = ():void => {
        if(counter > 0) {
            setCounter(counter-1)
        }
    }

    const handleAddAction = ():void => {
        setCounter(counter+1)
    }

    return (
        <div className={styles.food_item_info}>
            <div className={styles.food_item_info_image}>
                <Image className={styles.image} src="/food/food.png" alt='' width={0} height={0} unoptimized></Image>
            </div>
            <div className={styles.food_item_info_text}>
                <div className={styles.food_item_info_name}>
                    COMBO SOLO
                </div>
                <div className={styles.food_item_info_detail}>
                    1 Bắp Ngọt 60oz + 1 Coke 32oz
                </div>
                <div className={styles.food_item_info_detail}>
                    84,000 VND 
                </div>
                <div className={styles.food_item_info_counter_container}>
                    <div className={styles.food_item_info_counter_action} onClick={():void => {handleMinusAction()}}>
                        -
                    </div>
                    <div className={styles.food_item_info_counter}>
                        {counter}
                    </div>
                    <div className={styles.food_item_info_counter_action} onClick={():void => {handleAddAction()}}>
                        +
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodOption