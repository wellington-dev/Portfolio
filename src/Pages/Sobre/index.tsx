import * as S from "./styles";

import avatar from "../../assets/front-face-avatar.png";
import iconsCss from "../../assets/IconsSvg/icons-css3.svg";
import iconsHtml from "../../assets/IconsSvg/icons-html.svg";
import iconsJavascript from "../../assets/IconsSvg/icons-javascript.svg";
import iconstypescript from "../../assets/IconsSvg/icons-typescript.svg";
import iconsReact from "../../assets/IconsSvg/icons-react.svg";
import iconsTailwind from "../../assets/IconsSvg/icons-tailwind-css.svg";

export default function Sobre() {
  return (
    <S.About>
      <S.AboutRow>
        <S.Details>
          <S.StyleAvatar>
            <div>
              <img alt="imagem" src={avatar} />
            </div>
          </S.StyleAvatar>

          <S.Formation
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
          >
            <div className="first-box">
              <p className="solo">
                Olá, me chamo Wellington e tenho 23 anos, sou formado em{" "}
                <span>Análise e Desenvolvimento de sistemas</span> e apaixonado
                por tecnologia, esse espaço tem o propósito de reunir os últimos
                projetos que desenvolvi. Tenho como objetivo especializar-me na
                área de
                <span> desenvolvimento FrontEnd.</span> Para isso venho
                continuamente me capacitando e aplicando os conhecimentos
                adquiridos em projetos pessoais e profissionais, utilizando as
                principais tecnologias e ferramentas da área.
              </p>
            </div>
            <div className="second-box"></div>
          </S.Formation>
        </S.Details>
      </S.AboutRow>
      <S.Ability>
        <h2 className="skills">
          <span>Skills</span>
        </h2>
      </S.Ability>

      <S.SkillClass
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ul>
          <li>
            <div>
              <img src={iconsCss} />
              CSS
            </div>
          </li>
          <li>
            <div>
              <img src={iconsHtml} />
              HTML
            </div>
          </li>
          <li>
            <div>
              <img src={iconsJavascript} />
              JavaScript
            </div>
          </li>
          <li>
            <div>
              <img src={iconstypescript} />
              TypeScript
            </div>
          </li>
          <li>
            <div>
              <img src={iconsReact} />
              Reactjs
            </div>
          </li>
          <li>
            <div>
              <img src={iconsTailwind} />
              Tailwind
            </div>
          </li>
        </ul>
      </S.SkillClass>
    </S.About>
  );
}
