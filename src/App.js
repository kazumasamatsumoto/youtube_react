import "./App.css";

import indigo from "@material-ui/core/colors/indigo";
import createTheme from "@material-ui/core/styles/createTheme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import ApiContextProvider from "./context/ApiContext";
import Main from "./components/Main";

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: '"Comic Neue",cursive',
  },
});

function App() {
  return (
    // ApiContextProviderで囲いをすることでApiContextの中の実装した関数を使用することができる
    <ApiContextProvider>
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <Main />
      </MuiThemeProvider>
    </ApiContextProvider>
  );
}

export default App;
