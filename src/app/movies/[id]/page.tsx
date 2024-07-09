'use client'
import OrderMovieTicket from "@/components/OrderPage/OrderMovieTicket"
import { useRouter, useParams  } from 'next/navigation'
const OrderMovieTicketView = () => {
    const {id} = useParams()
    const idNum = parseInt(id.toString())
    return (
        <OrderMovieTicket id={idNum}/>
    )
}

export default OrderMovieTicketView
