'use client'

import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import Image from 'next/image'
import MovieItem from '../MovieItem/MovieItem';
import { useRouter } from 'next/navigation';
const MoviesView = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [enablePrev, setEnablePrev] = useState<boolean>(false)
    
    const [enableNext, setEnableNext] = useState<boolean>(true)

    const [typeScreen, setTypeScreen] = useState<number>(0)

    const [multipleValue, setMultipleValue] = useState<number>(33)

    const router = useRouter()

    const handleResize = () => {
        if (window.innerWidth < 400 && window.innerWidth >= 320) {
            setTypeScreen(1)
        } else if (window.innerWidth >= 400 && window.innerWidth < 935 )  {
            setTypeScreen(2)
        } else {
            setTypeScreen(3)
        }
      } 
    
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    },[])

    useEffect(() => {
        switch (typeScreen) {
            case 1:
                setMultipleValue(80)
                break
            case 2:
                setMultipleValue(50)
                break
            case 3:
                setMultipleValue(33)
                break
            default:
                break
        }
    }, [typeScreen])

    useEffect(() => {
        if(enableNext!==true && currentIndex!==items.length-1) {
            setEnableNext(true)
        }
        if(enablePrev!==true && currentIndex!==0){
            setEnablePrev(true)
        }
        if(currentIndex === 0){
            setEnablePrev(false)
        }
        if(currentIndex === items.length-1){
            setEnableNext(false)
        }
    },[currentIndex])

    const handlePrevMovie = ():void => {
        if(currentIndex>0){
            setCurrentIndex(currentIndex-1)
        }
    }

    const handleNextMovie = ():void => {
        if(currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex+1)
        }
    }

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
      ];
    


    return (
        <div className={styles.container}>
            <div className={styles.current_movie_container}>
                <div className={styles.current_movie_header}>
                    MOVIE IS SHOWING
                </div>  
                <div className={styles.list_movies}>
                    {items.map((item, index) => (
                        // <div className={styles.movie_item} key={index} 
                        //     style={
                        //         {
                        //             left: `${(index - currentIndex)*multipleValue}vw`,
                        //         }
                        //     }
                        // >
                        // <div className={styles.image_container}>
                        //     <Image className={styles.image} src={item.src} alt={item.name} width={160} height={90} unoptimized />
                        //     <div className={styles.image_overlay}>
                        //         <div className={styles.overlay_header}>
                        //             Gia tài của ngoại
                        //         </div>
                        //         <div className={styles.overlay_item}>
                        //             <Image src="/icons/icon-tag.svg" alt="" width={16} height={16}></Image>
                        //             <div className={styles.overlay_name}>
                        //                 Mentality
                        //             </div>
                        //         </div>
                        //         <div className={styles.overlay_item}>
                        //             <Image src="/icons/subtitle.svg" alt="" width={16} height={16}></Image>
                        //             <div className={styles.overlay_name}>
                        //                 Việt Nam
                        //             </div>
                        //         </div>
                        //         <div className={styles.overlay_item}>
                        //             <Image src="/icons/icon-clock.svg" alt="" width={16} height={16}></Image>
                        //             <div className={styles.overlay_name}>
                        //                 100m
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        // <div className={styles.movie_name}>
                        //     {item.name}
                        // </div>
                        // <div className={styles.btn_container}>
                        //     <div className={styles.order_btn}>
                        //         Book tickets
                        //     </div>
                        // </div>
                        // </div>
                        <MovieItem key={index} item={item} currentIndex={currentIndex} index={index}/>
                    ))}
                    <div className={`${styles.navigator} ${styles.left} ${enablePrev === false ? styles.disable : ''}`} onClick={() => {handlePrevMovie()}}>
                        <Image src="/icons/left1.svg" alt="" width={32} height={32}></Image>
                    </div>
                    <div className={`${styles.navigator} ${styles.right} ${enableNext === false ? styles.disable : ''}`} onClick={() => {handleNextMovie()}}>
                        <Image src="/icons/right1.svg" alt="" width={32} height={32}></Image>
                    </div>
                </div>
                <div className={styles.btn_container}>
                    <div className={styles.order_btn} onClick={() => {router.push('/showAll')}}>
                        See More
                    </div>
                </div>
            </div>
            <div className={styles.current_movie_container}>
                <div className={styles.current_movie_header}>    
                    UPCOMING MOVIE
                </div>  
                <div className={styles.list_movies}>
                    {items.map((item, index) => (
                       <MovieItem currentIndex={currentIndex} index={index} key={index} item={item}/>
                    ))}
                    <div className={`${styles.navigator} ${styles.left} ${enablePrev === false ? styles.disable : ''}`} onClick={() => {handlePrevMovie()}}>
                        <Image src="/icons/left1.svg" alt="" width={32} height={32}></Image>
                    </div>
                    <div className={`${styles.navigator} ${styles.right} ${enableNext === false ? styles.disable : ''}`} onClick={() => {handleNextMovie()}}>
                        <Image src="/icons/right1.svg" alt="" width={32} height={32}></Image>
                    </div>
                </div>
                <div className={styles.btn_container}>
                    <div className={styles.order_btn} onClick={() => {router.push('/showAll')}}>
                        See More
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default MoviesView