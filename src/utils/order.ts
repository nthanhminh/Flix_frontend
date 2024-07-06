import axios from "axios"
import { Food, Movie, MovieScheduleDate, OrderFoodRequest, OrderTicketRequest, Ticket } from '@/utils/typeOfResponse'
import dotenv from "dotenv"
dotenv.config()
const BACKEND_URL = process.env.BACKEND_URL || 'https://flix-backend-tyyl.onrender.com'

const orderFood = async (data: OrderFoodRequest) : Promise<string> => {
    try {
        const options = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data)
        };
        const response = await fetch(`${BACKEND_URL}/foods/orderFood`, options);
        console.log(response)
        if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const responseData = await response.json();

    console.log('Success:', responseData);
    return responseData;
    } catch (error) {
        console.log(error)
        return ''
    }
}

const orderTicket = async (data: OrderTicketRequest) : Promise<string> => {
        try {
        const options = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(`${BACKEND_URL}/orderTicket/orderTicket`, options);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
    
        const responseData = await response.json();
    
        console.log('Success:', responseData);
        return responseData;
        } catch (error) {
        console.log(error)
        return ''
    }
}

const getTicketPrice = async (filmId:number) : Promise<Ticket[]> => {
    try {
        const options = {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json', 
            },
        };
        const response = await fetch(`${BACKEND_URL}/movies/getTicketByFilmId/${filmId}`, options);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
    
        const responseData = await response.json();
    
        console.log('Success:', responseData);
        return responseData;
        } catch (error) {
        console.log(error)
        return []
    }
}

const orderApi = {
    orderFood,
    orderTicket,
    getTicketPrice
}

export default orderApi