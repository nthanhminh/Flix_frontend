'use client'
import { createContext, useState } from "react"
import NavBar from "../components/NavBar/NavBar"

interface GlobalContextType{
    type: number,
    setType: React.Dispatch<React.SetStateAction<number>>
    message: string,
    setMessage: React.Dispatch<React.SetStateAction<string>>
    displayMessage: boolean,
    setDisplayMessage: React.Dispatch<React.SetStateAction<boolean>>
    handleNotification: Function,
}

export const GlobalContext = createContext<GlobalContextType>({
    type: 0,
    setType: () => {},
    message: "",
    setMessage: () => {},
    displayMessage: false,
    setDisplayMessage: () => {},
    handleNotification: () => {},
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
    return (
        <GlobalContext.Provider value={{
            type,
            setType,
            message,
            setMessage,
            displayMessage,
            setDisplayMessage,
            handleNotification,
        }}>
            <div className="g_container">
                <NavBar></NavBar>
                {children}
            </div>
        </GlobalContext.Provider>
    )
    
}

export default GlobalProvider