'use client'
import { useRouter } from 'next/navigation';
import styles from './styles.module.css'
import Image from 'next/image'

const ShowAll = () => {

    const router = useRouter()    

    const items = [
        {
          src: '/movies/movie1.png',
          name: 'Silent land',
        },
        {
          src: '/movies/movie2.png',
          name: 'Silent land',
        },
        {
          src: '/movies/movie3.png',
          name: 'Silent land',
        },
        {
          src: '/movies/movie4.png',
          name: 'Silent land',
        },
        {
            src: '/movies/movie5.png',
            name: 'Silent land',
        },
        {
            src: '/movies/movie6.png',
            name: 'Silent land',
        },
        {
            src: '/movies/movie7.png',
            name: 'Silent land',
        },
        {
            src: '/movies/movie8.png',
            name: 'Silent land',
        },
        {
            src: '/movies/movie10.png',
            name: 'Silent land',
        },
        {
            src: '/movies/movie1.png',
            name: 'Silent land',
        },
        // Thêm các mục khác nếu cần
      ];

    return (
        <div className={styles.container}>
            <div className={styles.current_movie_container}>
                <div className={styles.current_movie_header}>
                    MOVIE IS SHOWING
                </div>  
                <div className={styles.list_movies}>
                    {items.map((item, index) => (
                        <div className={styles.movie_item} key={index} >
                        <div className={styles.image_container}>
                            <Image className={styles.image} src={item.src} alt={item.name} width={160} height={90} unoptimized />
                            <div className={styles.image_overlay}>
                                <div className={styles.overlay_header}>
                                    Gia tài của ngoại
                                </div>
                                <div className={styles.overlay_item}>
                                    <Image src="/icons/icon-tag.svg" alt="" width={16} height={16}></Image>
                                    <div className={styles.overlay_name}>
                                        Mentality
                                    </div>
                                </div>
                                <div className={styles.overlay_item}>
                                    <Image src="/icons/subtitle.svg" alt="" width={16} height={16}></Image>
                                    <div className={styles.overlay_name}>
                                        Việt Nam
                                    </div>
                                </div>
                                <div className={styles.overlay_item}>
                                    <Image src="/icons/icon-clock.svg" alt="" width={16} height={16}></Image>
                                    <div className={styles.overlay_name}>
                                        100m
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.movie_name}>
                            {item.name}
                        </div>
                        <div className={styles.btn_container}>
                            <div className={styles.order_btn} onClick={() => {router.push(`/movies/${index}`)}}> 
                                Book tickets
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShowAll
