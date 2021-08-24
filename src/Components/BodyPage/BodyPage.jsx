import React, { useState, useEffect } from "react";
import * as S from "./styles";
import api from "../../api/api";
import Carrousel, { consts } from "react-elastic-carousel";
/*import { useActions } from "../../hooks/useActions";*/

import search from "../../Images/search.svg";
import Card from "../Card";

function BodyPage() {
  const [values, setValues] = useState("");
  const [movies, setMovies] = useState([{}]);
  const [watched, setWatched] = useState([]);
  const [watching, setWatching] = useState([]);
  const [wantToWatch, setWantToWatch] = useState([]);
  
    const [isWatching, setIsWatching] = useState(false)
    const [isWatched, setIsWatched] = useState(false)
    const [isWantToWatch, setIsWantToWatch] = useState(false)
  
  useEffect(async () => {
    const { data } = await api.get(
      `movie/popular?api_key=549851ad4bb5922c5c7448f015735383&language=pt-BR&page=1`
      );
      setMovies(data.results);
    }, []);
    
    /*add watched movie to localstorage*/
    

  
  const onSubmit = async () => {
    const { data } = await api.get(
      `search/movie?api_key=549851ad4bb5922c5c7448f015735383&language=pt-BR&query=${values}&page=1&include_adult=true`
    );
    setMovies(data.results);
  };

  useEffect(() => {
    const watchedMovies = JSON.parse(
      localStorage.getItem('react-movie-app-watched-movie')
      );

      if(watchedMovies){

        setWatched(watchedMovies)

      } else {
        setWatched([{}])
      }
  }, []);

  const saveWatchedToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-watched-movie', JSON.stringify(items))
  }


  useEffect(() => {
    const watchingMovies = JSON.parse(
      localStorage.getItem('react-movie-app-watching-movie')
      );

      if(watchingMovies){

        setWatching(watchingMovies)

      } else {
        setWatching([{}])
      }
  }, []);

  const saveWatchingToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-watching-movie', JSON.stringify(items))
  }

  useEffect(() => {
    const wantToWatchMovies = JSON.parse(
      localStorage.getItem('react-movie-app-want-to-watch-movie')
      );

      if(wantToWatchMovies){

        setWantToWatch(wantToWatchMovies)

      } else {
        setWantToWatch([{}])
      }
  }, []);

  const saveWantToWatchToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-want-to-watch-movie', JSON.stringify(items))
  }

  /*add watched movie */
 const addWatchedMovie = (filme) => {
  const newWatched = [...watched, filme]
  setWatched(newWatched);
  saveWatchedToLocalStorage(newWatched);
  setIsWatched(true);
}

/*remove watched movie*/
const removeWatched = (filme) => {
  const newWatchedList = watched.filter((watched) => watched.id !== filme.id);

  setWatched(newWatchedList);
  saveWatchedToLocalStorage(newWatchedList);
  
}

/*add watching movie */
const addWatchingMovie = (filme) => {
  const newWatching = [...watching, filme];
  setWatching(newWatching);
  saveWatchingToLocalStorage(newWatching);
  setIsWatching(true);
}

/*remove  watching movie*/
const removeWatching = (filme) => {
  const newWatchingList = watching.filter((watched) => watched.id !== filme.id);

  setWatching(newWatchingList);
  saveWatchingToLocalStorage(newWatchingList);
}


/*add want to watch movie */
 const addWantToWatchMovie = (filme) => {
   const newWantToWatch = [...wantToWatch, filme];
   setWantToWatch(newWantToWatch);
   saveWantToWatchToLocalStorage(newWantToWatch);
   setIsWantToWatch(true)
 }

 /*remove want to watch movie*/
 const removeWantToWatch = (filme) => {
   const newWantToWatchList = wantToWatch.filter((wantToWatch) => wantToWatch.id !== filme.id);

   setWantToWatch(newWantToWatchList);
   saveWantToWatchToLocalStorage(newWantToWatchList);
 }

  /* carrousel config*/
  const breakPoints = [
    { width: 500, itemsToShow: 1, itemsToScroll: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1500, itemsToShow: 5, itemsToScroll: 5 },
  ];


  

  return (
    <S.BodyPage>
      <S.InputBox>
        <input
          onChange={(e) => setValues(e.target.value)}
          type="search"
          placeholder="type for search..."
        ></input>
        <button onClick={() => onSubmit()}>
          <img src={search} alt="search icon"></img>
        </button>
      </S.InputBox>
      <h2>{values ? "filmes relacionados a " + values : "melhores filmes"}</h2>
      <Carrousel
        breakPoints={breakPoints}
        pagination={false}
        disableArrowsOnEnd={false}
        itemPosition={consts.CENTER}
      >
        {movies.map(
          (filme) =>
            filme.poster_path && (
              <Card
                key={filme.id}
                film={filme}
                handleWatched={addWatchedMovie}
                handleWatching={addWatchingMovie}
                handleWantToWatch={addWantToWatchMovie}
              />
            )
        )}
      </Carrousel>

      {watched.length !== 1 && (
        <>
          <h2>Assistidos</h2>
          <Carrousel
            breakPoints={breakPoints}
            pagination={false}
            disableArrowsOnEnd={false}
            itemPosition={consts.CENTER}
          >
            {  watched.map(
              (assistido) =>
                assistido.poster_path && (
                  <Card
                    key={assistido.id}
                    film={assistido}
                    handleWatched={removeWatched}
                    isWatched={isWatched}
                  />
                )
            )}
          </Carrousel>
        </>
      )}

{watching.length !== 1 && (
        <>
          <h2>Assistindo</h2>
          <Carrousel
            breakPoints={breakPoints}
            pagination={false}
            disableArrowsOnEnd={false}
            itemPosition={consts.CENTER}
          >
            {watching.map(
              (assistindo) =>
                assistindo.poster_path && (
                  <Card
                    key={assistindo.id}
                    film={assistindo}
                    handleWatching={removeWatching}
                    isWatching={isWatching}

                  />
                )
            )}
          </Carrousel>
        </>
      )}

{wantToWatch.length !== 1 && (
        <>
          <h2>Querendo assistir</h2>
          <Carrousel
            breakPoints={breakPoints}
            pagination={false}
            disableArrowsOnEnd={false}
            itemPosition={consts.CENTER}

          >
            {wantToWatch
            .map(
              (querAssistir) =>
                querAssistir.poster_path && (
                  <Card
                    key={querAssistir.id}
                    film={querAssistir}
                    handleWantToWatch={removeWantToWatch}
                    isWantToWatch={isWantToWatch}
                  />
                )
            )}
          </Carrousel>
        </>
      )}
    </S.BodyPage>
  );
}

export default BodyPage;
