import * as S from "./styles";
// import {
//   Container,
//   Row,
//   MiddleBox,
//   BoxText,
//   BoxImg,
//   LinkWeb,
//   GitHubSVG,
//   LinkedinSVG,
// } from "./styles";

import homeMain from "../../assets/IconsSvg/homeMain.svg";
export default function Home() {
  return (
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <S.LinkWeb>
        <span>
          <S.GitHubSVG />
        </span>
        <span>
          <S.LinkedinSVG />
        </span>
      </S.LinkWeb>
      <S.Row>
        <S.MiddleBox>
          <S.BoxText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>
              Até onde o <span>poder</span> dos códigos podem nos levar?
            </h1>
            <p>
              A nossa sociedade tem se tornado cada vez mais digital. Não fique
              para trás, posso ajudar você nessa jornada!
            </p>
          </S.BoxText>

          <S.BoxImg>
            <img alt="imagem" src={homeMain} />
          </S.BoxImg>
        </S.MiddleBox>
      </S.Row>
    </S.Container>
  );
}
