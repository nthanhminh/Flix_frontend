'use client'
import { createContext, useEffect, useState } from "react"
import NavBar from "../components/NavBar/NavBar"
import { usePathname, useRouter } from "next/navigation"
import { foodListType } from "@/utils/typeOfResponse"
import Cookies from "js-cookie"
import loginApi from "@/utils/login"
import NotificationView from "@/components/Notification/Notification"

interface GlobalContextType{
    needLogin: boolean,
    setNeedLogin: React.Dispatch<React.SetStateAction<boolean>>
    type: number,
    setType: React.Dispatch<React.SetStateAction<number>>
    message: string,
    setMessage: React.Dispatch<React.SetStateAction<string>>
    displayMessage: boolean,
    setDisplayMessage: React.Dispatch<React.SetStateAction<boolean>>
    handleNotification: Function,
    totalPrice: number,
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>,
    foodList: foodListType,
    setFoodList: React.Dispatch<React.SetStateAction<foodListType>>,
    comboList: foodListType,
    setComboList: React.Dispatch<React.SetStateAction<foodListType>>,
    numberOfSeats: number,
    setNumberOfSeats: React.Dispatch<React.SetStateAction<number>>,
    selectedSeats: string[],
    setSelectedSeats: React.Dispatch<React.SetStateAction<string[]>>,
    userName: string,
    setUserName: React.Dispatch<React.SetStateAction<string>>,
    userId: number,
    setUserId: React.Dispatch<React.SetStateAction<number>>,
    accessToken: string
    setAccessToken: React.Dispatch<React.SetStateAction<string>>,
}

export const GlobalContext = createContext<GlobalContextType>({
    type: 0,
    setType: () => {},
    message: "",
    setMessage: () => {},
    displayMessage: false,
    setDisplayMessage: () => {},
    handleNotification: () => {},
    totalPrice: 0,
    setTotalPrice: () => {},
    foodList: {},
    setFoodList: () => {},
    comboList: {},
    setComboList: () => {},
    numberOfSeats: 0,
    setNumberOfSeats: () => {},
    selectedSeats: [],
    setSelectedSeats: () => {},
    needLogin: false,
    setNeedLogin: () => {},
    userName: '',
    setUserName: () => {},
    userId: 0,
    setUserId: () => {},
    accessToken: '',
    setAccessToken: () => {},
})

const GlobalProvider = ({children} : {children: React.ReactNode}) =>{
    const [type, setType] = useState<number>(0)
    const [message, setMessage] = useState<string>("")
    const [displayMessage, setDisplayMessage] = useState<boolean>(false)
    const [accessToken, setAccessToken] = useState<string>('')
    const handleNotification = (type:number, message:string) => {
        setType(type)
        setMessage(message)
        setDisplayMessage(true)
    }
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [foodList, setFoodList] = useState<foodListType>({})
    const [comboList, setComboList] = useState<foodListType>({})
    const [numberOfSeats, setNumberOfSeats] = useState<number>(0)
    const [selectedSeats, setSelectedSeats] = useState<string[]>([])
    const [needLogin, setNeedLogin] = useState<boolean>(false)
    const [userName, setUserName] = useState<string>("")
    const [userId, setUserId] = useState<number>(0)
    const pathName = usePathname()
    const router = useRouter()

    useEffect(() => {
        if(displayMessage) {
            setTimeout(() => {
                setDisplayMessage(false)
            },3000)
        }
    }, [displayMessage])

    useEffect(() => {
        const token = Cookies.get('accessToken');
        const userId = Cookies.get('userId')
        setUserId(parseInt(userId!) ?? 0)
        console.log(needLogin)
        if (token) {
            if(loginApi.isTokenExpired(token)) {
                setNeedLogin(true)
            }
            else {
                const data = loginApi.getUserInfoFromToken(token!)
                setUserName(data.userName ?? '')
                setUserId(data.userId ?? 0)
                setNeedLogin(false)
                if (pathName && pathName.startsWith('/login')) {
                    router.push('/');
                    router.push('/');
                }
            }
        }
        else {
            setNeedLogin(true)
            router.push('/login')
        }
    }, [])

    useEffect(() => {
        setTotalPrice(0)
        setComboList({})
        setFoodList({})
        setSelectedSeats([])
        setNumberOfSeats(0)
        if(needLogin){
            router.push('/login')
        }
        const token = Cookies.get('accessToken');
        const data = loginApi.getUserInfoFromToken(token!)
        setUserName(data.userName ?? '')
        setUserId(data.userId ?? 0)
    }, [pathName])

    return (
        <GlobalContext.Provider value={{
            type,
            setType,
            message,
            setMessage,
            displayMessage,
            setDisplayMessage,
            handleNotification,
            totalPrice,
            setTotalPrice,
            foodList,
            setFoodList,
            comboList,
            setComboList,
            numberOfSeats,
            setNumberOfSeats,
            selectedSeats,
            setSelectedSeats,
            needLogin, 
            setNeedLogin,
            userName,
            setUserName,
            userId,
            setUserId,
            accessToken,
            setAccessToken
        }}>
            <div className="g_container">
                {
                    !needLogin ? <NavBar></NavBar> : (<></>)
                }
                <NotificationView></NotificationView>
                {children}
                {/* <Payment></Payment> */}
            </div>
        </GlobalContext.Provider>
    )
    
}

export default GlobalProvider