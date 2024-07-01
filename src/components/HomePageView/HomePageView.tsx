'use client'

import { FC, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import AnotherService from '../HomePageViewChildren/AnotherService/AnotherService';
import Services from '../HomePageViewChildren/Services/Services';
import Contact from '../HomePageViewChildren/Contact/Contact';
import { useRouter } from 'next/navigation';

interface HomePageProps{
}

const HomePageView: FC<HomePageProps> = () => {

    const router = useRouter()

    const initialItems = [
        { id: 1, bg: '/bg/bg1.jpg', name: 'XMEN', description: 'This is an interesting film' },
        { id: 2, bg: '/bg/bg2.jpg', name: 'XMEN', description: 'This is an interesting film' },
        { id: 3, bg: '/bg/bg3.jpg', name: 'XMEN', description: 'This is an interesting film' },
        { id: 4, bg: '/bg/bg4.jpg', name: 'XMEN', description: 'This is an interesting film' },
        { id: 5, bg: '/bg/bg5.jpg', name: 'XMEN', description: 'This is an interesting film' },
        { id: 6, bg: '/bg/bg6.jpg', name: 'XMEN', description: 'This is an interesting film' },
    ];

    const [items, setItems] = useState(initialItems);

    useEffect(() => {
        setTimeout(() => {
            moveFirstToLast()
        }, 5000)
      }, [items]);

    const moveFirstToLast = ():void => {
        console.log('Move first to last')
        const updatedItems = [...items];
        const firstItem = updatedItems.shift(); // Lấy phần tử đầu tiên và xóa nó khỏi mảng
        if (firstItem) {
            updatedItems.push(firstItem); // Thêm phần tử đầu tiên vào cuối mảng
        }
        setItems(updatedItems);
    };

    const moveLastToFirst = ():void => {
        if (items.length <= 1) {
            return;
        }
    
        const updatedItems = [...items]; 
        const lastItem = updatedItems.pop(); 
    
        if (lastItem) {
            updatedItems.unshift(lastItem); 
        }
    
        setItems(updatedItems); 
    }

    return (
        <div className={styles.container}>
            <div className={styles.slides}>
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={styles.item}
                        style={{ backgroundImage: `url(${item.bg})`, cursor: 'pointer' }}
                        onClick={() => {
                            router.push(`/movies/${index}`)
                        }}
                    >
                        <div className={`${styles.content} ${index === 0 ? styles.show : ''}`}>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.description}>{item.description}</div>
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