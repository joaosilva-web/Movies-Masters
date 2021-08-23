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
  const [wantToWatch, setWantToWatch] = useState([])

  useEffect(async () => {
    const { data } = await api.get(
      `movie/popular?api_key=549851ad4bb5922c5c7448f015735383&language=pt-BR&page=1`
    );
    setMovies(data.results);
  }, []);

  useEffect(() => {
    const movieWatched = JSON.parse(
      localStorage.getItem("react-movie-app-watched")
    );
    setWatched(movieWatched);
  }, []);

  const onSubmit = async () => {
    const { data } = await api.get(
      `search/movie?api_key=549851ad4bb5922c5c7448f015735383&language=pt-BR&query=${values}&page=1&include_adult=false`
    );
    setMovies(data.results);
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-watched", JSON.stringify(items));
  };
  /*add watched movie */
  const addWatchedMovie = (filme) => {
    const newWatchedList = [...watched, filme];
    setWatched(newWatchedList);
    saveToLocalStorage(newWatchedList);
  };
  /*remove watched movie*/
  const removeWatchedMovie = (filme) => {
    const newWatchedList = watched.filter((watched) => watched.id !== filme.id);

    setWatched(newWatchedList);
  };
  /*add watching movie */
 const addWatchingMovie = (filme) => {
  const newWatchingMovie = [...watching, filme];
  setWatching(newWatchingMovie);
 } 
 /*remove watching movie*/
 const removeWatchingMovie = (filme) => {
   const newWatchingList = watching.filter((watched) => watched.id !== filme.id);

   setWatching(newWatchingList);
 }
 /*console.log(watching);*/

/*add want to watch movie */
 const addWantToWatchMovie = (filme) => {
   const newWantToWatch = [...wantToWatch, filme];
   setWantToWatch(newWantToWatch);
 }

 /*remove want to watch movie*/
 const removeWantToWatch = (filme) => {
   const newWantToWatchList = wantToWatch.filter((watched) => watched.id !== filme.id);

   setWantToWatch(newWantToWatchList);
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
          placeholder="search..."
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

      {Boolean(watched.length) && (
        <>
          <h2>Assistidos</h2>
          <Carrousel
            breakPoints={breakPoints}
            pagination={false}
            disableArrowsOnEnd={false}
            itemPosition={consts.CENTER}
          >
            {watched.map(
              (assistido) =>
                assistido.poster_path && (
                  <Card
                    key={assistido.id}
                    film={assistido}
                    handleWatched={removeWatchedMovie}
                  />
                )
            )}
          </Carrousel>
        </>
      )}

{Boolean(watching.length) && (
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
                    handleWatched={removeWatchingMovie}
                  />
                )
            )}
          </Carrousel>
        </>
      )}

{Boolean(wantToWatch.length) && (
        <>
          <h2>Assistindo</h2>
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
                    handleWatched={removeWantToWatch}
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
