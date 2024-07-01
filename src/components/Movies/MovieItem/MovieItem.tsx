'use client'

import { FC, useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'
import Image from 'next/image';
import { debounce } from '@/utils/debounced';
import { useRouter } from 'next/navigation';

interface MovieItemProps {
    item: {
        src: string,
        name: string
    },
    index: number,
    currentIndex: number,
}

const MovieItem: FC<MovieItemProps> = ({item, index, currentIndex}) => {

    const router = useRouter()

    const [typeScreen, setTypeScreen] = useState<number>(0)

    const [multipleValue, setMultipleValue] = useState<number>(33)

    const handleResize = () => {
        console.log(imageRef.current?.height)
        if(imageRef.current?.height !== undefined){
            // setHeight(imageRef.current?.clientHeight)
            debouncedSetHeight(imageRef.current?.clientHeight || 0);
        }
        if (window.innerWidth < 600 && window.innerWidth >= 320) {
            setTypeScreen(1)
        } else if (window.innerWidth >= 600 && window.innerWidth < 935 )  {
            setTypeScreen(2)
        } else {
            setTypeScreen(3)
        }
    } 
    const [height, setHeight] = useState<number>(528);
    
    const imageRef = useRef<HTMLImageElement>(null)    

    const debouncedSetHeight = useCallback(debounce((height: number) => setHeight(height), 100), []);

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    },[])

    useEffect(() => {
        switch (typeScreen) {
            case 1:
                setMultipleValue(100)
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

    return (<div className={styles.movie_item} key={index}
        style={{
            left: `${(index - currentIndex) * multipleValue}vw`,
        }}
    >
        <div className={styles.image_container}>
            <Image ref={imageRef} className={styles.image} src={item.src} alt={item.name} width={160} height={90} unoptimized />
            <div className={styles.image_overlay} 
                style={{height: `${height}px`}}
            >
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
        <div className={styles.btn_container} >
            <div className={styles.order_btn} onClick={() => {router.push(`/movies/${index}`)}}>
                Book tickets
            </div>
        </div>
    </div>);
}

export default MovieItem;