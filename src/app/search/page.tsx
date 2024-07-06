'use client'
import ShowAll from '@/components/Movies/Shows/ShowsAll';
import movieApi from '@/utils/movieApi';
import { Movie } from '@/utils/typeOfResponse';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SearchPage = () => {
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('search');
    useEffect(()=>{
        if (searchTerm) {
            console.log(searchTerm)
            const fetchData = async () => {
                const respone = await movieApi.searchMovie(searchTerm)
                setMovies(respone)
           }
           fetchData()
        }
    },[searchTerm])
    const [movies, setMovies] = useState<Movie[]>([]);
    return (
        <ShowAll title='Search Results' movies={movies}/>
    )
}

export default SearchPage

