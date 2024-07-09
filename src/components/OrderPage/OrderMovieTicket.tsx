'use client'
import { error } from 'console'
import styles from './styles.module.css'
import Image from 'next/image'
import ShowTime from '../OrderPageComponent/ShowTime/ShowTime'
import { useRouter } from 'next/navigation'
import { Food, Movie, MovieSchedule, MovieScheduleDate, Ticket } from '@/utils/typeOfResponse'
import { use, useEffect, useState } from 'react'
import movieApi from '@/utils/movieApi'
import foodApi from '@/utils/foodApi'
import FoodPage from '../OrderPageComponent/FoodPage/FoodPage'
import orderApi from '@/utils/order'
import LottieControl from '../LoadingPage/LoadingPage'
const OrderMovieTicket = ({id} : {id:number}) => {

    const router = useRouter()
    const [movie, setMovie] = useState<Movie | null>(null)
    const [movieScheduleDate, setMovieScheduleDate] = useState<MovieScheduleDate | null>(null)
    const [food, setFood] = useState<Food[]>([])
    const [combo, setCombo] = useState<Food[]>([])
    const [prices, setPrices] = useState<Ticket[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(()=>{
        const fetchData = async(id: number) => {
            setLoading(true)
            const respone = await Promise.all([
                movieApi.fetchMovieById(id),
                movieApi.fetchMovieSchedule(id),
                foodApi.getAllFood(),
                foodApi.getAllCombo(),
                orderApi.getTicketPrice(id)
            ])
            setMovie(respone[0])
            setMovieScheduleDate(respone[1])
            setFood(respone[2])
            setCombo(respone[3])
            setPrices(respone[4])
            setLoading(false)
        }

        fetchData(id)
    }, [])

    
    return (
            loading ? (
                <div className={styles.container}>
                    <LottieControl></LottieControl>
                </div>
            ) : 
            (
                    <div className={styles.container}>
                    <div className={styles.movie_info_container}>
                        <div className={styles.movie_info_image_container}>
                            <Image className={styles.image} src={movie?.image!} alt='' width={360} height={480} unoptimized></Image>        
                        </div>
                        <div className={styles.movie_info}>
                            <div className={styles.movie_info__name}>
                                {/* Slient Land: Day One */}
                                {movie?.name}
                            </div>
                            <div className={styles.overlay_item}>
                                <Image src="/icons/icon-tag.svg" alt="" width={24} height={24} unoptimized></Image>
                                <div className={styles.overlay_name}>
                                    {movie?.tag}
                                </div>
                            </div>
                            <div className={styles.overlay_item}>
                                <Image src="/icons/subtitle.svg" alt="" width={24} height={24} unoptimized></Image>
                                <div className={styles.overlay_name}>
                                    {movie?.country}
                                </div>
                            </div>
                            <div className={styles.overlay_item}>
                                <Image src="/icons/icon-clock.svg" alt="" width={24} height={24} unoptimized></Image>
                                <div className={styles.overlay_name}>
                                    {movie?.duration}
                                </div>
                            </div>
                            <div className={styles.movie_info_description}>
                                <div className={styles.movie_info_header}>
                                    Description
                                </div>
                                <div className={styles.movie_info_description_item}>
                                    Director: {movie?.director}
                                    
                                </div>
                                <div className={styles.movie_info_description_item}>
                                    Actors: {movie?.mainActors}
                                </div>
                                {/* <div className={styles.movie_info_description_item}>
                                    Premiere: June 27, 2024
                                </div> */}
                            </div>
                            <div className={styles.movie_info_content}>
                                <div className={styles.movie_info_header}>
                                    MOVIE CONTENT
                                </div>
                                <div className={styles.movie_info_description_item}>
                                    {movie?.content}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <ShowTime food={food} combo={combo} movieScheduleDate={movieScheduleDate ?? {'': []}} prices={prices}></ShowTime>
                </div>
            )
    )
}

export default OrderMovieTicket

