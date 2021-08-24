import styled from "styled-components";


export const Card = styled.div`
    position: relative;

    background-image:  ${({image}) => `url(https://image.tmdb.org/t/p/w500/${image})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    height: 25rem;
    width: 15rem;

    transition: all .5s ease;

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 768px) {
        height: 25rem;
        width: 15rem;
    }
    
`

export const CardOverLay = styled.div`
    position: absolute;
    top: -30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 0;

   height: 120%;
   width: 100%;

   opacity: 0;
   transition: all .5s ease;

   &:hover {
       background-color: rgba(0,2,7, .95);
       opacity: 1;
       top: 0;

       height: 100%;
   }
`

export const Title = styled.div`
   
   
    text-align: center;
    margin: 0 2%;
   
`

 export const FormButtons = styled.div`
    display: flex;
    justify-content: space-evenly;

        @keyframes pulse {
            0% {
                transform: scale3d(1, 1, 1);
            }
            50% {
                transform: scale3d(1.1, 1.1, 1.1);
            }
            100% {
                transform: scale3d(1, 1, 1);
            }
        }
`;

export const Button = styled.button`
            
        background-color: transparent;
        border: 0;
        color: ${({selected}) => selected ? "#128AB4" : "#fff"};

        font-size: 1.5rem;

        &:hover {
            cursor: pointer;
            color: #128AB4;
            animation-name: pulse;
            animation-duration: .75s;
            animation-fill-mode: both;
        }

`