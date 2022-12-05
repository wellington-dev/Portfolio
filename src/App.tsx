import Rotas from "./routes";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/theme";

export default function App() {
  return (
    <div className="apps">
      <ThemeProvider theme={theme}>
        <Rotas />
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}
