import React, { useState } from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "../../Images/logo.svg";

function Header({ mapAction, handleRemove }) {
  const [isOpen, setIsOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <S.Header>
      <S.Logo>
        <img src={logo}></img>
      </S.Logo>
      
    </S.Header>
  );
}

export default Header;
