'use client'
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import movieApi from '@/utils/movieApi';
import { Movie } from '@/utils/typeOfResponse';
import LottieControl from '@/components/LoadingPage/LoadingPage';

const ShowAll = dynamic(() => import('@/components/Movies/Shows/ShowsAll'), { ssr: false });

function SearchPageInner() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm) {
          setLoading(true);
          const response = await movieApi.searchMovie(searchTerm);
          setMovies(response);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    loading ? (
      <div style={{
        paddingTop: '8%',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <LottieControl />
      </div>
    ) : (
      <ShowAll title='Search Results' movies={movies} />
    )
  );
}

export default function SearchPage() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <SearchPageInner />
      </Suspense>
    );
  }