'use client'

import { FC, useContext } from "react"
import styles from './styles.module.css'
import Image from "next/image"
import { GlobalContext } from "@/contexts/GlobalContext";

const NotificationView = () => {

    const {type, message, displayMessage, setDisplayMessage} = useContext(GlobalContext)

    const handleClose = ():void => {
        setDisplayMessage(false);
    }

    return (
        <div 
            className={`${styles.container} ${displayMessage === true ? styles.display : ''}`}
        >
            <div className={styles.icon}>
               {
                type === 0 ? (
                    <Image src="/images/success_icon.png" alt="" width={32} height={32}></Image>
                ) : (
                    <Image src="/images/error_icon.png" alt="" width={32} height={32}></Image>
                )
               } 
            </div>
            <div className={styles.message}>
                {message}
            </div>
            <div className={styles.close} 
                onClick={():void => {handleClose()}}
            >
                &times;
            </div>
        </div>
    )
}

export default NotificationView