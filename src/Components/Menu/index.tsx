import * as S from "./styles";

import house from "../../assets/IconsSvg/house.svg";
import sobre from "../../assets/IconsSvg/sobre.svg";
import project from "../../assets/IconsSvg/project.svg";
import Contact from "../../assets/Icons/icons-contact.png";

import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <S.Navigation>
      <S.MenuContainer>
        <S.MenuItem>
          <NavLink to="/">
            <img src={house} alt="ola" />
            <span>Home</span>
          </NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <NavLink to="sobre">
            <img src={sobre} alt="ola" />
            <span>Sobre</span>
          </NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <NavLink to="projeto">
            <img src={project} alt="ola" />
            <span>Projetos</span>
          </NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <NavLink to="contact">
            <img src={Contact} alt="ola" />
            <span>Contato</span>
          </NavLink>
        </S.MenuItem>
      </S.MenuContainer>
    </S.Navigation>
  );
}
