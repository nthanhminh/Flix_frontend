'use client'
import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css'
import Image from 'next/image'
import { Combo, Food } from '@/utils/typeOfResponse';
import { GlobalContext } from '@/contexts/GlobalContext';

const FoodOption = ({
    item,
    type
} : {
    item: Food | Combo,
    type: number
}) => {
    const {totalPrice, setTotalPrice, foodList, setFoodList, comboList, setComboList} =useContext(GlobalContext)
    const [counter, setCounter] = useState<number>(0);

    const handleMinusAction = (price: string, id: number):void => {
        if(counter > 0) {
            handleAddIntoOrder(id, type, -1)
            const newPrice = parseInt(price.replace(',', ''))
            setTotalPrice(totalPrice - newPrice)
            setCounter(counter-1)
        }
    }

    const handleAddIntoOrder = (id: number, type: number, action: number) => {
        if(type === 1) {
            if(!comboList[id]){
                comboList[id] = 0
            }
            comboList[id]+= action
        } else {
            if(!foodList[id]){
                foodList[id] = 0
            }
            foodList[id]+= action 
        }
    }

    const handleAddAction = (price: string, id: number):void => {
        handleAddIntoOrder(id, type, 1)
        const newPrice = parseInt(price.replace(',', ''))
        setTotalPrice(totalPrice + newPrice)
        setCounter(counter+1)
    }

    return (
        <div className={styles.food_item_info}>
            <div className={styles.food_item_info_image}>
                {/* <Image className={styles.image} src="/food/food.png" alt='' width={0} height={0} unoptimized></Image> */}
                <Image className={styles.image} src={item.image} alt='' width={0} height={0} unoptimized></Image>
            </div>
            <div className={styles.food_item_info_text}>
                <div className={styles.food_item_info_name}>
                    {/* COMBO SOLO */}
                    {item.name}
                </div>
                <div className={styles.food_item_info_detail}>
                    {/* 1 Bắp Ngọt 60oz + 1 Coke 32oz */}
                    {item.name}
                </div>
                <div className={styles.food_item_info_detail}>
                    {/* 84,000 VND  */}
                    {`${item.price} VND`}
                </div>
                <div className={styles.food_item_info_counter_container}>
                    <div className={styles.food_item_info_counter_action} onClick={():void => {handleMinusAction(item.price, item.id)}}>
                        -
                    </div>
                    <div className={styles.food_item_info_counter}>
                        {counter}
                    </div>
                    <div className={styles.food_item_info_counter_action} onClick={():void => {handleAddAction(item.price, item.id)}}>
                        +
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodOption