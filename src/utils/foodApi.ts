import axios from "axios"
import { Combo, Food, Movie, MovieScheduleDate } from '@/utils/typeOfResponse'
import dotenv from "dotenv"
import updateApiHeader from "./apiHeader"
dotenv.config()
const BACKEND_URL = process.env.BACKEND_URL || 'https://flix-backend-1.onrender.com'

const getAllFood = async () : Promise<Food[]> => {
  try {
    const options = {
        method: 'GET', 
        headers: updateApiHeader()
    };
    const response = await fetch(`${BACKEND_URL}/foods/getAllFood`, options);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
  }

  const responseData = await response.json();

  return responseData;
  } catch (error) {
    throw new Error('Network response was not ok ')
    return []
}
}

const getAllCombo = async () : Promise<Combo[]> => {
        try {
        const options = {
            method: 'GET', 
            headers: updateApiHeader()
        };
        const response = await fetch(`${BACKEND_URL}/foods/getAllCombo`, options);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
    
        const responseData = await response.json();

        return responseData;
        } catch (error) {
            throw new Error('Network response was not ok ')
            return []
    }
}

const foodApi = {
    getAllFood,
    getAllCombo
}

export default foodApi