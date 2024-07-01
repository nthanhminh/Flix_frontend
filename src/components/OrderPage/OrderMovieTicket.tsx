import { error } from 'console'
import styles from './styles.module.css'
import Image from 'next/image'
import ShowTime from '../OrderPageComponent/ShowTime/ShowTime'
const OrderMovieTicket = () => {
    return (
        <div className={styles.container}>
            <div className={styles.movie_info_container}>
                <div className={styles.movie_info_image_container}>
                    <Image className={styles.image} src="/movies/movie1.png" alt='' width={360} height={480} unoptimized></Image>        
                </div>
                <div className={styles.movie_info}>
                    <div className={styles.movie_info__name}>
                        Slient Land: Day One
                    </div>
                    <div className={styles.overlay_item}>
                        <Image src="/icons/icon-tag.svg" alt="" width={24} height={24} unoptimized></Image>
                        <div className={styles.overlay_name}>
                            Mentality
                        </div>
                    </div>
                    <div className={styles.overlay_item}>
                        <Image src="/icons/subtitle.svg" alt="" width={24} height={24} unoptimized></Image>
                        <div className={styles.overlay_name}>
                            Việt Nam
                        </div>
                    </div>
                    <div className={styles.overlay_item}>
                        <Image src="/icons/icon-clock.svg" alt="" width={24} height={24} unoptimized></Image>
                        <div className={styles.overlay_name}>
                            100m
                        </div>
                    </div>
                    <div className={styles.movie_info_description}>
                        <div className={styles.movie_info_header}>
                            Description
                        </div>
                        <div className={styles.movie_info_description_item}>
                            Director: Michael Sarnoski
                        </div>
                        <div className={styles.movie_info_description_item}>
                            Actors: Joseph Quinn, Alex Wolff, Djimon Hounsou
                        </div>
                        <div className={styles.movie_info_description_item}>
                            Premiere: June 27, 2024
                        </div>
                    </div>
                    <div className={styles.movie_info_content}>
                        <div className={styles.movie_info_header}>
                            MOVIE CONTENT
                        </div>
                        <div className={styles.movie_info_description_item}>
                            Witness the day when the whole world suddenly fell silent.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={styles.showTime}>
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
            </div> */}
            <ShowTime></ShowTime>
        </div>
    )
}

export default OrderMovieTicket