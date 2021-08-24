import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faClock,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  console.log(props.watched);
  console.log(props.watching);
  console.log(props.wantToWatch);

  return (
    <S.Card image={props.film.poster_path}>
      <S.CardOverLay>
        <S.Title>
          <h2>{props.film.title}</h2>
        </S.Title>
        <S.FormButtons>
          <S.Button
            selected={props.isWatched}
            color={props.color}
            onClick={() => props.handleWatched(props.film)}
          >
            <FontAwesomeIcon icon={faCheckCircle} />
          </S.Button>
          <S.Button
            selected={props.isWatching}
            onClick={() => props.handleWatching(props.film)}
          >
            <FontAwesomeIcon icon={faClock} />
          </S.Button>
          <S.Button
            selected={props.isWantToWatch}
            onClick={() => props.handleWantToWatch(props.film)}
          >
            <FontAwesomeIcon icon={faHistory} />
          </S.Button>
        </S.FormButtons>
      </S.CardOverLay>
    </S.Card>
  );
}

export default Card;
