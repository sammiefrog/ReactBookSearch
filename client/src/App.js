import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AppBar from './components/AppBar';
import Search from './pages/Search';
import Saved from "./pages/Saved";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { cyan } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: {
      main: "#ff4081",
    },
  },
});


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <AppBar color="primary"/>
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search/>
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
