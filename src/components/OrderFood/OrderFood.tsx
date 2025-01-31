'use client'
import { useState, useEffect, useContext } from 'react'
import FoodList from '../OrderPageComponent/FoodList/FoodList'
import styles from './styles.module.css'
import { Combo, Food } from '@/utils/typeOfResponse'
import foodApi from '@/utils/foodApi'
import Payment from '../OrderPageComponent/Payment/Payment'
import { GlobalContext } from '@/contexts/GlobalContext'
import orderApi from '@/utils/order'
import LottieControl from '../LoadingPage/LoadingPage'
const OrderFoodPage = () => {

    const [foods, setFoods] = useState<Food[]>([])

    const [combos, setCombos] = useState<Combo[]>([])

    const [loading, setLoading] = useState<boolean>(false)

    const {foodList, comboList, totalPrice, handleNotification, userId, setTotalPrice,} = useContext(GlobalContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const respone = await Promise.all([
                    foodApi.getAllFood(),
                    foodApi.getAllCombo()
                ])
                setFoods(respone[0])
                setCombos(respone[1])
                setLoading(false)
            } catch (error) {
                handleNotification(1, 'Network error. Please reload the website')
            }
        }

        fetchData()
    }, [])

    const handlePay = async () => {
        try {
            const respone = await orderApi.orderFood({
                customerId: userId,
                totalPrice: totalPrice.toString(),
                foodIdList: foodList,
                comboIdList: comboList
            })

            console.log(respone)

            handleNotification(0, respone)
            setTotalPrice(0)
        } catch (error) {
            handleNotification(1, 'Error occured. Please try again')
        }

    }

    return (
        loading ? (
            <div className={styles.container}>
                <LottieControl></LottieControl>
            </div>
        ) : (
            <div className={styles.container}>
                <FoodList title="COMBO" list={combos} type={1} />
                <FoodList title="FOOD" list={foods} type={2} />
                <Payment callback={handlePay} />
            </div>
        )
    );
    
}

export default OrderFoodPage