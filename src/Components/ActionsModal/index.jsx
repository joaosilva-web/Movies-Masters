/*import React from 'react';
import Carrousel, { consts } from "react-elastic-carousel";
import Card from "../Card";



import * as S from './styles'

export const ActionsModal = ({mapAction, handleRemove, isOpen}) => {

    console.log(mapAction)

    const breakPoints = [
        { width: 500, itemsToShow: 1, itemsToScroll: 1 },
        { width: 500, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1200, itemsToShow: 3, itemsToScroll: 3 },
        { width: 1500, itemsToShow: 5, itemsToScroll: 5 },
      ];

    return (
        
       isOpen && ( <S.Container isOpen={isOpen}>
             {mapAction.length !== 1 && (
        <>
          <h2>Assistidos</h2>
          <Carrousel
            breakPoints={breakPoints}
            pagination={false}
            disableArrowsOnEnd={false}
            itemPosition={consts.CENTER}
          >
            {  mapAction.map(
              (assistido) =>
                assistido.poster_path && (
                  <Card
                    key={assistido.id}
                    film={assistido}
                    handleWatched={handleRemove}
                  />
                )
            )}
          </Carrousel>
        </>
      )}

        </S.Container>)
    )

}*/