import axios from "axios"
import { Movie, MovieScheduleDate } from '@/utils/typeOfResponse'
import dotenv from "dotenv"
dotenv.config()
const BACKEND_URL = process.env.BACKEND_URL || 'https://flix-backend-tyyl.onrender.com'
const fetchMovies = async () : Promise<Movie[]> => {
    try {
      console.log(BACKEND_URL)
      const response = await fetch(`${BACKEND_URL}/movies/getTop10FilmCurrentShowing`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const movies = await response.json();
      return movies;
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
};

const fetchMoviesComingSoon = async () : Promise<Movie[]> => {
  try {
    console.log(BACKEND_URL)
    const response = await fetch(`${BACKEND_URL}/movies/getTop10FilmComingSoon`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};

const getAllCurrentFilms = async () : Promise<Movie[]> => {
  try {
    console.log(BACKEND_URL)
    const response = await fetch(`${BACKEND_URL}/movies/getAllCurrentFilms`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};

const getAllComingFilms = async () : Promise<Movie[]> => {
  try {
    console.log(BACKEND_URL)
    const response = await fetch(`${BACKEND_URL}/movies/getAllComingFilms`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};

const fetchMovieById = async (id : number): Promise<Movie | null> => {
    try {
        const response = await fetch(`${BACKEND_URL}/movies/getMovieById/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const movies = await response.json();
        return movies;
      } catch (error) {
        console.error('Fetch error:', error);
        return null;
      }
}


const fetchMovieSchedule = async (id : number): Promise<MovieScheduleDate | null> => {
  try {
      const options = {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json', 
        },
      };
      const response = await fetch(`${BACKEND_URL}/orderTicket/getMovieScheduleByFilmId/${id}`, options);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const responseData = await response.json();

    console.log('Success:', responseData);
  return responseData;
  } catch (error) {
    console.log(error)
    return null
  }
}
const fetchDataAbouSeat = async (movieScheduleId: number) : Promise<string[]> => {
  try {
    const options = {
      method: 'GET', 
      headers: {
          'Content-Type': 'application/json', 
      },
    };
    const response = await fetch(`${BACKEND_URL}/orderTicket/getSeatingOrderDetailByMovieSchedule/${movieScheduleId}`, options);
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

const searchMovie = async (search: string) : Promise<Movie[]> => {
  try {
    console.log(BACKEND_URL)
    const response = await fetch(`${BACKEND_URL}/movies/searchMovie?search=${search}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
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
    searchMovie
}

export default movieApi