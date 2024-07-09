'use client'

import { FC, useContext, useEffect, useState } from 'react'
import styles from './styles.module.css'
import AnotherService from '../HomePageViewChildren/AnotherService/AnotherService';
import Services from '../HomePageViewChildren/Services/Services';
import Contact from '../HomePageViewChildren/Contact/Contact';
import { useRouter } from 'next/navigation';
import movieApi from '@/utils/movieApi';
import { Movie } from '@/utils/typeOfResponse';
import LottieControl from '../LoadingPage/LoadingPage';
import { GlobalContext } from '@/contexts/GlobalContext';

interface HomePageProps{
}

const HomePageView: FC<HomePageProps> = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const {handleNotification} = useContext(GlobalContext)
    const router = useRouter()

    useEffect( () => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const respone: Movie[] = await movieApi.fetchMovies()
                const tmp: Movie[] = []
                for(let i = 0; i < respone.length; i++){
                    if(i<6){
                        tmp.push(respone[i])
                    }
                }
                setMovies(tmp)
                setLoading(false)
            } catch (error) {
                handleNotification(1, 'Network error. Please reload the website')
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            moveFirstToLast()
        }, 8000)
      }, [movies]);

    const moveFirstToLast = ():void => {
        const updatedItems = [...movies];
        const firstItem = updatedItems.shift(); 
        if (firstItem) {
            updatedItems.push(firstItem); 
        }
        setMovies(updatedItems);
    };

    const moveLastToFirst = ():void => {
        if (movies.length <= 1) {
            return;
        }
    
        const updatedItems = [...movies]; 
        const lastItem = updatedItems.pop(); 
    
        if (lastItem) {
            updatedItems.unshift(lastItem); 
        }
    
        setMovies(updatedItems); 
    }

    return (
        <div className={styles.container}>
            {
                loading ? (
                    <LottieControl/>
                ) : (
                    <div className={styles.slides}>
                        {movies.map((item, index) => (
                            <div
                                key={item.id}
                                className={styles.item}
                                style={{ backgroundImage: `url(${item.image})`, cursor: 'pointer' }}
                                onClick={() => {
                                    router.push(`/movies/${item.id}`)
                                }}
                            >
                                <div className={`${styles.content} ${index === 0 ? styles.show : ''}`}>
                                    <div className={styles.name}>{item.name}</div>
                                    <div className={styles.description}>{item.content}</div>
                                    <div className={styles.btn}>Order Now</div>
                                </div>
                            </div>
                        ))}
                        {/* <div className={styles.prev_next_container}>
                            <div className={styles.navigator} onClick={():void => {moveLastToFirst()}}>
                                <Image src="/icons/left1.svg" alt="" width={32} height={32}></Image>
                            </div>
                            <div className={styles.navigator} onClick={():void => {moveFirstToLast()}}>
                                <Image src="/icons/right1.svg" alt="" width={32} height={32}></Image>
                            </div>
                        </div> */}
                    </div>
                )
            }
            <AnotherService></AnotherService>
            <Services/>
            <Contact/>
            <div className={styles.footer}>
                This is a product developed by APICI
            </div>
        </div>
    )
}

export default HomePageView