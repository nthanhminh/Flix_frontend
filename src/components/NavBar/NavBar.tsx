'use client'

import { usePathname, useRouter } from "next/navigation"
import { useContext, useEffect, useRef, useState } from "react"
import styles from './styles.module.css'
import Image from "next/image"
import { GlobalContext } from "@/contexts/GlobalContext"
const NavBar = () => {
    const router = useRouter()
    const pathName = usePathname()
    const {userName} = useContext(GlobalContext)
    const [selected, setSelected] = useState<number>(0)
    const [value, setValue] = useState<string>('');
    const input = useRef<HTMLInputElement>(null)

    useEffect(() => {
        switch (pathName) {
            case '/order_film_ticket':
                setSelected(1)
                break;
            case '/order_food':
                setSelected(2)
                break;
            case '/login':
                setSelected(3)
                break;
        }
        console.log('userName: ', userName)
    }, [pathName])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
          router.push(`/search?search=${value}`)
          if (input.current) {
            input.current.value = '';
          }
        }
      };

    return (
        <div className={styles.container}>
            <div className={styles.logo} onClick={() => {
                router.push('/')
            }}>
                <Image className={styles.images} src="/images/logo.png" alt="" width={36} height={18}></Image>
            </div>
            <div className={styles.option_list}>
                <div className={styles.option_item} onClick={
                    () => {
                        router.push('/order-ticket')
                    }
                }>
                    Book your tickets now
                </div>
                <div className={styles.option_item} onClick={
                    () => {
                        router.push('/order-food')
                    }
                }>
                    Order food now
                </div>
            </div>
            <div className={styles.search}>
                <input ref={input} onKeyDown={handleKeyDown} onChange={(event) => {handleChange(event)}} className={styles.search_input} type="text" placeholder="Search your favourite films"/>
            </div>
            <div className={styles.login} onClick={() => {
                router.push('/orders')
            }}>
                {userName}
            </div>
            <div className={styles.navBar_mobile}>
                <Image src="icons/menu.png" alt="" width={32} height={32} unoptimized></Image>
                <div className={styles.navBar_mobile_container}>
                    <div className={styles.navbar_mobile_item} onClick={
                        () => {
                            router.push('/order-ticket')
                        }
                    }>
                            Book your tickets now
                    </div>
                    <div className={styles.navbar_mobile_item} onClick={
                        () => {
                            router.push('/order-food')
                        }
                    }>
                        Order food now
                    </div>
                    <div className={styles.navbar_mobile_item} onClick={() => {
                        router.push('/orders')
                    }}>
                        {userName}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar