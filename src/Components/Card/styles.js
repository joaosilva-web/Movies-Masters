import styled from "styled-components";


export const Card = styled.div`
    position: relative;

    background-image:  ${({image}) => `url(https://image.tmdb.org/t/p/w500/${image})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    

    height: 30rem;
    overflow: hidden;
    width:  20rem;

    transition: all .5s ease;

    &:hover {
        transform: scale(1.1);
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
   
   h2{
    text-align: center;
    margin: 0 2%;
   }
`

 export const FormButtons = styled.div`
    display: flex;
    justify-content: space-evenly;

    button {
        background-color: transparent;
        border: 0;
        color: #fff;

        font-size: 1.5rem;

        &:hover {
            cursor: pointer;
            color: #128AB4;
            animation-name: pulse;
            animation-duration: .75s;
            animation-fill-mode: both;
        }

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
    }
`;
