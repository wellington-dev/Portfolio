import Logo from "../Logo";
import Menu from "../Menu";

import * as S from "./styles";

export default function Header() {
  return (
    <S.Container>
      <S.NavBar>
        <div>
          <Logo />
        </div>

        <Menu />
      </S.NavBar>
    </S.Container>
  );
}
