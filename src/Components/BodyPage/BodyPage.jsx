import React, { useState } from 'react';
import * as S from './styles';
import api from "../../api/api";
import Carrousel from "react-elastic-carousel";

import search from "../../Images/search.svg";
import Card from '../Card';


function BodyPage() {
    const [values, setValues] = useState("");
    const [response, setResponse] = useState([{}]);
    


    /*const {data} = api.get(`movie/popular?api_key=549851ad4bb5922c5c7448f015735383&language=en-US&page=1`)*/


    const onSubmit = async() => {
    const {data} = await api.get(`search/movie?api_key=549851ad4bb5922c5c7448f015735383&language=pt-BR&query=${values}&page=1&include_adult=false`)
    setResponse(data.results);
  }

    const breakPoints = [
      {width: 500, itemsToShow: 1},
      {width: 767, itemsToShow: 2, itemsToScroll: 2},
      {width: 1200, itemsToShow: 3, itemsToScroll: 3},
      {width: 1500, itemsToShow: 5, itemsToScroll: 5}
]

    return(        
        <S.BodyPage>
            <S.InputBox>
          <input
            onChange={e => setValues(e.target.value)}
            type="search"
            placeholder="search..."
          ></input>
          <button onClick={() => onSubmit()}><img src={search} alt="search icon"></img></button>

        </S.InputBox>
                <Carrousel breakPoints={breakPoints} isRTL={true} pagination={false} disableArrowsOnEnd={false}>
                    {response.map((filme) =>
                    filme.poster_path && (
                            <Card  key={filme.id} {...filme}/>              
                    ))}
                    
                </Carrousel>
        </S.BodyPage>
    )
}

export default BodyPage;