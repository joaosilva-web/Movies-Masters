import React, { useState } from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import{ActionsModal} from '../ActionsModal/index'


import logo from "../../Images/logo.svg";

function Header({mapAction, handleRemove}) {

  const [isOpen, setIsOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);



  

    return(
        <S.Header>
          <S.Logo>
        <img src={logo}></img>
          </S.Logo>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars}/>
        </button>
        <S.Menu isOpen={isOpen}>
            <li className="nav-list-item">
              <a onClick={() => setModalOpen(!modalOpen)}>Início</a>
            </li>
            <li className="nav-list-item">
              <a>Visto</a>
            </li>
            <li className="nav-list-item">
              <a>Assistindo</a>
            </li>
            <li className="nav-list-item">
              <a>Quero Ver</a>
            </li>
        </S.Menu>
      </S.Header>


    )
}

export default Header;