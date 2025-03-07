import { createContext, useEffect, useState, useContext } from "react";


const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const[fav, setFav] = useState([])

    useEffect(() => {
        const stored = localStorage.getItem("fav")

        if (stored) setFav(JSON.parse(stored))
    }, [])

    useEffect(() => {
        localStorage.setItem('fav', JSON.stringify(fav))
    }, [fav])


    const addTo = (movie) => {
        setFav(prev => [...prev, movie])
    }

    const removeFav = (movieId) => {
        setFav(prev => prev.filter(movie => movie.id != movieId))
    }

    const isFav = (movieId) => {
        return fav.some(movie => movie.id === movieId)
    }


    const value = {
        fav,
        addTo,
        removeFav,
        isFav
    }


    return <MovieContext.Provider value={value}>
        {children}
        </MovieContext.Provider>
}