'use client'
import ShowAll from "@/components/Movies/Shows/ShowsAll"
import movieApi from "@/utils/movieApi"
import { Movie } from "@/utils/typeOfResponse"
import { useRouter, useParams  } from 'next/navigation'
import { useEffect, useState } from "react"
const ShowAllPage = () => {
    const {type} = useParams()
    const typeUsed = type.toString()
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(() => {
        const fetchData = async() => {
            console.log(typeUsed)
            if(typeUsed === 'current'){
                const respone = await movieApi.getAllCurrentFilms()
                setMovies(respone)
            } else {
                const respone = await movieApi.getAllComingFilms()
                setMovies(respone)
            }
        }
        
        fetchData()
    }, [])
    return (
        <ShowAll title={typeUsed === 'current' ? "movie is showing" : "upcoming movie"} movies={movies}/>
    )
}

export default ShowAllPage