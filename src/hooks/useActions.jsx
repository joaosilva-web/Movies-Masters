/*import { useState } from 'react'

const useActions = (movieData)  => {

    const [filmActions, setFilmActions] = useState([movieData])


    const updateStorage = () => {

        localStorage.removeItem("@actions")

        let NewLocalStorage = JSON.stringify(filmActions)

        localStorage.setItem("@actions", NewLocalStorage)

    }

    const handleClick = (movie) => {

        let movieId = movie.id;
        
        if(filmActions && filmActions[movieId])
        {
            let auxiliar = filmActions;

            delete auxiliar[movieId];

            setFilmActions(auxiliar);

            updateStorage();


        }else
        {
            let auxiliar = filmActions ? filmActions : {};

            auxiliar[movieId] = movie;

            setFilmActions(auxiliar);

            updateStorage();

        }

    }




    return [{filmActions}, handleClick];
}

export {useActions}*/