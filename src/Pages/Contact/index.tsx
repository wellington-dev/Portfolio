import * as S from "./styles";

import { motion } from "framer-motion";
import { GitHubSVG, LinkedinSVG } from "../Home/styles";

export default function Contact() {
  return (
    <S.Container>
      <S.ContactMiddle>
        <S.Content>
          <S.InformationBox>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1>Wellington</h1>
              <h1 className="align-text">Queiroz</h1>
            </motion.div>

            <motion.div
              className="middle-line"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            ></motion.div>
            <h2>Dev FrontEnd</h2>
          </S.InformationBox>

          <S.LinkSocial>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <li>
                <GitHubSVG />
                <LinkedinSVG />
              </li>
              <li>Wellyngtonqueirozs@gmail.com</li>
            </motion.ul>
          </S.LinkSocial>
        </S.Content>
      </S.ContactMiddle>
    </S.Container>
  );
}
