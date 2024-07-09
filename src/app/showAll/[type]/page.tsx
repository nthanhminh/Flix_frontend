'use client'
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import movieApi from '@/utils/movieApi';
import { Movie } from '@/utils/typeOfResponse';

const ShowAll = dynamic(() => import('@/components/Movies/Shows/ShowsAll'), { ssr: false });

const ShowAllPage = () => {
  const { type } = useParams();
  const typeUsed = type.toString();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (typeUsed === 'current') {
          response = await movieApi.getAllCurrentFilms();
        } else {
          response = await movieApi.getAllComingFilms();
        }
        setMovies(response);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [typeUsed]);

  return (
    <ShowAll title={typeUsed === 'current' ? 'Movies Currently Showing' : 'Upcoming Movies'} movies={movies} />
  );
};

export default ShowAllPage;
