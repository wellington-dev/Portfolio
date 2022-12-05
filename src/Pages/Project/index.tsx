import * as S from "./styles";
import MyProjects from "../../Components/ListProjects/MyProjects";
import list from "./list";

export default function Project() {
  return (
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <S.Row>
        <MyProjects project={list} />
      </S.Row>
    </S.Container>
  );
}
