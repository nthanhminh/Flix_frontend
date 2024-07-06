'use client'
import { useRouter } from 'next/navigation';
import styles from './styles.module.css'
import Image from 'next/image'
import { Movie } from '@/utils/typeOfResponse';

const ShowAll = ({
    title,
    movies
} : {
    title: string,
    movies: Movie[]
}) => {

    const router = useRouter()    

    return (
        <div className={styles.container}>
            <div className={styles.current_movie_container}>
                <div className={styles.current_movie_header}>
                    {title}
                </div>  
                <div className={styles.list_movies}>
                    {movies.map((item, index) => (
                        <div className={styles.movie_item} key={index} >
                        <div className={styles.image_container}>
                            <Image className={styles.image} src={item.image} alt={item.name} width={160} height={90} unoptimized />
                            <div className={styles.image_overlay}>
                                <div className={styles.overlay_header}>
                                    {item.name}
                                </div>
                                <div className={styles.overlay_item}>
                                    <Image src="/icons/icon-tag.svg" alt="" width={16} height={16}></Image>
                                    <div className={styles.overlay_name}>
                                        {item.tag}
                                    </div>
                                </div>
                                <div className={styles.overlay_item}>
                                    <Image src="/icons/subtitle.svg" alt="" width={16} height={16}></Image>
                                    <div className={styles.overlay_name}>
                                        {item.country}
                                    </div>
                                </div>
                                <div className={styles.overlay_item}>
                                    <Image src="/icons/icon-clock.svg" alt="" width={16} height={16}></Image>
                                    <div className={styles.overlay_name}>
                                        {item.duration}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.movie_name}>
                            {item.name}
                        </div>
                        <div className={styles.btn_container}>
                            <div className={styles.order_btn} onClick={() => {router.push(`/movies/${item.id}`)}}> 
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
