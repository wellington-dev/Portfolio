import * as S from "./styles";

import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <S.ContainerLogo>
      <NavLink to="/">
        <span>wq</span>
      </NavLink>
    </S.ContainerLogo>
  );
}
