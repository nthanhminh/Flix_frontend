import axios from "axios"
import { Food, Movie, MovieScheduleDate, OrderFoodRequest, OrderTicketRequest, Ticket } from '@/utils/typeOfResponse'
import dotenv from "dotenv"
import updateApiHeader from "./apiHeader"
dotenv.config()
const BACKEND_URL = process.env.BACKEND_URL || 'https://flix-backend-1.onrender.com'

const orderFood = async (data: OrderFoodRequest) : Promise<string> => {
    try {
        const options = {
        method: 'POST', 
        headers: updateApiHeader(),
        body: JSON.stringify(data)
        };
        const response = await fetch(`${BACKEND_URL}/foods/orderFood`, options);
        if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const responseData = await response.json();

    return responseData;
    } catch (error) {
        throw new Error('Network response was not ok');
        return ''
    }
}

const orderTicket = async (data: OrderTicketRequest) : Promise<string> => {
        try {
        const options = {
            method: 'POST', 
            headers: updateApiHeader(),
            body: JSON.stringify(data)
        };
        const response = await fetch(`${BACKEND_URL}/orderTicket/orderTicket`, options);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
    
        const responseData = await response.json();
    
        return responseData;
        } catch (error) {
            throw new Error('Network response was not ok');
            return ''
    }
}

const getTicketPrice = async (filmId:number) : Promise<Ticket[]> => {
    try {
        const options = {
            method: 'GET', 
            headers: updateApiHeader(),
        };
        const response = await fetch(`${BACKEND_URL}/movies/getTicketByFilmId/${filmId}`, options);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
    
        const responseData = await response.json();
        return responseData;
        } catch (error) {
            throw new Error('Network response was not ok');
            return []
    }
}

const orderApi = {
    orderFood,
    orderTicket,
    getTicketPrice
}

export default orderApi