import { Route, Switch } from "react-router-dom";
import classes from "./CssSheets/HeaderBar.module.css";

import HeaderBar from "./HeaderFooter/HeaderBar";
import MainPage from "./Pages/MainPage";
import AboutMe from "./Pages/AboutMe";

import HeaderBarMobile from "./HeaderFooter/HeaderBarMobile";

function App() {
  if (window.screen.width <= 1024) {
    return (
      <div>
        <HeaderBarMobile />
        <Switch></Switch>
      </div>
    );
  } else {
    return (
      <div>
        <HeaderBar />
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/AboutMe">
            <AboutMe />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
