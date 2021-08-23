import React, { useState } from "react";
import * as S from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faClock, faHistory, } from "@fortawesome/free-solid-svg-icons";


function Card(props) {
  
  
  return (
    <S.Card image={props.film.poster_path}>
        <S.CardOverLay>
          <S.Title>
            <h2>{props.film.title}</h2>
          </S.Title>
          <S.FormButtons>
              <button onClick={() => props.handleWatched(props.film)}>
              <FontAwesomeIcon icon={faCheckCircle} />
              </button>
              <button onClick={() => props.handleWatching(props.film)}>
              <FontAwesomeIcon icon={faClock} />
              </button>
              <button>
              <FontAwesomeIcon icon={faHistory} />
              </button>
          </S.FormButtons>
        </S.CardOverLay>
    </S.Card>
  );
}

export default Card;
