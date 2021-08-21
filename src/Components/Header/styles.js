import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: 0;
    color: white;
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
      width: 20%;
      cursor: pointer;
      font-size: 26px;
    }
  }
`;

export const Logo = styled.div`
  @media screen and (max-width: 768px) {
    padding-left: 3rem;
  width: 80%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    background-color: #000109;
    position: absolute;
    top: 75px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.5s ease-in-out;
    width: 100%;
    z-index: 999;

  li {
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
      margin: 10px 0;
    }
  }
  }
`;
