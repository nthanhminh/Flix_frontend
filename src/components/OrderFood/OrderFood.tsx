'use client'
import { useState, useEffect, useContext } from 'react'
import FoodList from '../OrderPageComponent/FoodList/FoodList'
import styles from './styles.module.css'
import { Combo, Food } from '@/utils/typeOfResponse'
import foodApi from '@/utils/foodApi'
import Payment from '../OrderPageComponent/Payment/Payment'
import { GlobalContext } from '@/contexts/GlobalContext'
import orderApi from '@/utils/order'
const OrderFoodPage = () => {

    const [foods, setFoods] = useState<Food[]>([])

    const [combos, setCombos] = useState<Combo[]>([])

    const {foodList, comboList, totalPrice} = useContext(GlobalContext)

    useEffect(() => {
        const fetchData = async () => {
            const respone = await Promise.all([
                foodApi.getAllFood(),
                foodApi.getAllCombo()
            ])

            setFoods(respone[0])
            setCombos(respone[1])
        }

        fetchData()
    }, [])

    const handlePay = async () => {
        const foods = Object.fromEntries(
            Object.entries(foodList)
                .filter(([key, value]) => value > 0)
                .map(([key, value]) => [parseInt(key), value])
        );
        
        const combos = Object.fromEntries(
            Object.entries(foodList)
                .filter(([key, value]) => value > 0)
                .map(([key, value]) => [parseInt(key), value])
        );
        const respone = await orderApi.orderFood({
            customerId: 1,
            totalPrice: totalPrice.toString(),
            foodIdList: foodList,
            comboIdList: combos
        })

        console.log(respone)
    }

    return (
        <div className={styles.container}>
            <FoodList title="COMBO" list={combos} type={1}></FoodList>
            <FoodList title="FOOD" list={foods} type={2}></FoodList>
            <Payment callback={handlePay}></Payment>
        </div>
    )
}

export default OrderFoodPage