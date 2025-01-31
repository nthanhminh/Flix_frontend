import axios from "axios"
import { Movie, MovieScheduleDate, OrderResponse } from '@/utils/typeOfResponse'
import dotenv from "dotenv"
import updateApiHeader from "./apiHeader"
dotenv.config()
const BACKEND_URL = process.env.BACKEND_URL || 'https://flix-backend-1.onrender.com'
const fetchMovies = async () : Promise<Movie[]> => {
    try {
      const options = {
        method: 'GET', 
        headers: updateApiHeader(),
      };
      const response = await fetch(`${BACKEND_URL}/movies/getTop10FilmCurrentShowing`, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const movies = await response.json();
      return movies;
    } catch (error) {
      throw new Error('Network response was not ok');
      return [];
    }
};

const fetchMoviesComingSoon = async () : Promise<Movie[]> => {
  try {
    const options = {
      method: 'GET', 
      headers: updateApiHeader(),
    };
    const response = await fetch(`${BACKEND_URL}/movies/getTop10FilmComingSoon`, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    throw new Error('Network response was not ok');
    return [];
  }
};

const getAllCurrentFilms = async () : Promise<Movie[]> => {
  try {
    const options = {
      method: 'GET', 
      headers: updateApiHeader(),
    };
    const response = await fetch(`${BACKEND_URL}/movies/getAllCurrentFilms`, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    throw new Error('Network response was not ok');
    console.error('Fetch error:', error);
    return [];
  }
};

const getAllComingFilms = async () : Promise<Movie[]> => {
  try {
    const options = {
      method: 'GET', 
      headers: updateApiHeader(),
    };
    const response = await fetch(`${BACKEND_URL}/movies/getAllComingFilms`, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    throw new Error('Network response was not ok');
    console.error('Fetch error:', error);
    return [];
  }
};

const fetchMovieById = async (id : number): Promise<Movie | null> => {
    try {
      const options = {
        method: 'GET', 
        headers: updateApiHeader(),
      };
      const response = await fetch(`${BACKEND_URL}/movies/getMovieById/${id}`, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const movies = await response.json();
      return movies;
      } catch (error) {
        throw new Error('Network response was not ok');
        console.error('Fetch error:', error);
        return null;
      }
}


const fetchMovieSchedule = async (id : number): Promise<MovieScheduleDate | null> => {
  try {
      const options = {
        method: 'GET', 
        headers: updateApiHeader(),
      };
      const response = await fetch(`${BACKEND_URL}/orderTicket/getMovieScheduleByFilmId/${id}`, options);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const responseData = await response.json();

  return responseData;
  } catch (error) {
    throw new Error('Network response was not ok');
    return null
  }
}
const fetchDataAbouSeat = async (movieScheduleId: number) : Promise<string[]> => {
  try {
    const options = {
      method: 'GET', 
      headers: updateApiHeader(),
    };
    const response = await fetch(`${BACKEND_URL}/orderTicket/getSeatingOrderDetailByMovieSchedule/${movieScheduleId}`, options);
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

const searchMovie = async (search: string) : Promise<Movie[]> => {
  try {
    const options = {
      method: 'GET', 
      headers: updateApiHeader(),
    };
    const response = await fetch(`${BACKEND_URL}/movies/searchMovie?search=${search}`, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    throw new Error('Network response was not ok');
    console.error('Fetch error:', error);
    return [];
  }
}

const getOrderFromUserId = async (userId: number): Promise<OrderResponse> => {
  try {
    const options = {
      method: 'GET', 
      headers: updateApiHeader(),
    };
    const response = await fetch(`${BACKEND_URL}/orderTicket/getOrderByCustomerId/${userId}`, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    throw new Error('Network response was not ok');
    console.error('Fetch error:', error);
    return {};
  }
}

const movieApi = {
    fetchMovies,
    fetchMovieById,
    fetchMovieSchedule,
    fetchDataAbouSeat,
    fetchMoviesComingSoon,
    getAllComingFilms,
    getAllCurrentFilms,
    searchMovie,
    getOrderFromUserId
}

export default movieApi