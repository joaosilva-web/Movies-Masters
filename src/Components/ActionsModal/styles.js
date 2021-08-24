import styled from 'styled-components'


export const Container = styled.div`
    display: ${({isOpen}) => isOpen ? 'flex': 'none'};
    flex-direction: column;
    z-index: 10;
    align-items: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    background-color: #000109;
    border-radius: 12px;

    section {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    
`

