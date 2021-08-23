import styled from "styled-components";

export const BodyPage = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const InputBox = styled.div`
    position: relative;
        
        display: flex;
        border: 1px solid #fff;
        border-radius: 25px;
        margin: 0 auto;
        margin-bottom: 2rem;
        padding: 10px;
        width: 30%;

        input{
            background-color: transparent;
            border: 0;
            color: #fff;
            height: 28px;
            padding: 0 15px;
            outline: 0;
            width: 100%;
        }
        input::-webkit-search-cancel-button {
            display: none;
        }
        button {
            background: transparent;
            border: 0;
            position: absolute;
            right: 10px;
        }

        @media screen and (max-width:768px) {
            width: 80%;
        }

`

export const CardBox = styled.div`
    display: flex;
    height: fit-content;
    width: fit-content;
    gap: 1rem;
`

