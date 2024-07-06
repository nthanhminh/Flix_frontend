'use client'
import { createContext, useEffect, useState } from "react"
import NavBar from "../components/NavBar/NavBar"
import { usePathname, useRouter } from "next/navigation"
import { foodListType } from "@/utils/typeOfResponse"

interface GlobalContextType{
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
    setSelectedSeats: React.Dispatch<React.SetStateAction<string[]>>
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

})

const GlobalProvider = ({children} : {children: React.ReactNode}) =>{
    const [type, setType] = useState<number>(0)
    const [message, setMessage] = useState<string>("")
    const [displayMessage, setDisplayMessage] = useState<boolean>(false)
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
    const pathName = usePathname()

    useEffect(() => {
        setTotalPrice(0)
        setComboList({})
        setFoodList({})
        setSelectedSeats([])
        setNumberOfSeats(0)
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
            setSelectedSeats
        }}>
            <div className="g_container">
                <NavBar></NavBar>
                {children}
                {/* <Payment></Payment> */}
            </div>
        </GlobalContext.Provider>
    )
    
}

export default GlobalProvider