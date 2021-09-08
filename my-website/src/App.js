import { Route, Switch } from "react-router-dom";
import classes from "./CssSheets/HeaderBar.module.css";

import HeaderBar from "./HeaderFooter/HeaderBar";
import MainPage from "./Pages/MainPage";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <div className={classes.total}>
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

export default App;
