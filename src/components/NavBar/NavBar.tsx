import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import styles from './styles.module.css'
import Image from "next/image"
const NavBar = () => {
    const router = useRouter()
    const pathName = usePathname()
    const [selected, setSelected] = useState<number>(0)

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
    }, [pathName])

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
                <input className={styles.search_input} type="text" placeholder="Search your favourite films"/>
            </div>
            <div className={styles.login}>
                Login
            </div>
            <div className={styles.navBar_mobile}>
                <Image src="icons/menu.png" alt="" width={32} height={32} unoptimized></Image>
                <div className={styles.navBar_mobile_container}>
                    <div className={styles.navbar_mobile_item}>
                        Book your tickets now
                    </div>
                    <div className={styles.navbar_mobile_item}>
                        Order food now
                    </div>
                    <div className={styles.navbar_mobile_item}>
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar