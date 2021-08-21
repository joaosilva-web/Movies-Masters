import React, { useState } from "react";
import * as S from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faClock, faHistory, } from "@fortawesome/free-solid-svg-icons";

function Card(film) {
    

  return (
    <S.Card image={film.poster_path}>
        <S.CardOverLay>
          <S.Title>
            <h2>{film.title}</h2>
          </S.Title>
          <S.FormButtons>
              <button>
              <FontAwesomeIcon icon={faCheckCircle} />
              </button>
              <button>
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
