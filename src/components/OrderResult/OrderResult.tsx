'use client'
import styles from './styles.module.css'
import Image from 'next/image'
import { OrderResponse } from '@/utils/typeOfResponse'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '@/contexts/GlobalContext'
import movieApi from '@/utils/movieApi'
import LottieControl from '../LoadingPage/LoadingPage'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
const OrderResult = () => {
    const [orders, setOrders] = useState<OrderResponse>({})
    const {userId} = useContext(GlobalContext)
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const handleLogout = () => {
        Cookies.set('accessToken', '')
        router.push('/login')
    }
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
            try {
            if(userId>0){
                try {
                    const response = await movieApi.getOrderFromUserId(userId)
                    setOrders(response)
                } catch (error) {
                    throw new Error("Error fetching order")
                }
            }
           } catch (error) {
                console.log(error)
           }
           setLoading(false)
        }

        fetchData()
    }, [])
    return (
        loading ? (
            <div className={styles.container}>
                <LottieControl/>
            </div>
        ) : (
            <div className={styles.container}>
                <div className={styles.header}>
                    Oder Result
                </div>
                <div className={styles.orderList}>
                    {Object.keys(orders).length > 0 ?
                        (
                            Object.keys(orders).map((orderId) => {
                            const value = orders[parseInt(orderId)]
                            if(value.food.length === 0 && value.seats.length === 0 && value.movieImage === null && value.movieTitle === null){
                                return (<></>)
                            }
                            return (
                                <div className={styles.orderItem} key={orderId}>
                                    <div className={styles.image_container}>
                                        <Image className={styles.image} src={value.movieImage !== null ? value.movieImage : '/bg/waiter.png'} height={0} width={0} alt='' unoptimized></Image>
                                    </div>
                                    <div className={styles.info_container}>
                                        <ul className={styles.list}>
                                            <li className={styles.text}>
                                                <p className={styles.title}>Movie: {value.movieTitle!==null ? value.movieTitle : 'None'} </p> 
                                            </li>
                                            <li className={styles.text}>
                                                <p className={styles.title}>Food: {value.food.length > 0 ? value.food.join(', ') : "None"} </p> 
                                            </li>
                                            <li className={styles.text}>
                                                <p className={styles.title}>Seats: {value.seats.length > 0 ? value.seats.join(', ') : "None"}</p> 
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                        ): 
                        (
                            <div>NOT FOUND</div>
                        )
                        
                    }
                </div>
                <div className={styles.logout}>
                    <button className={styles.logoutBtn} onClick={() => {handleLogout()}}>Log out</button>
                </div>
            </div>
        )
    )
}

export default OrderResult