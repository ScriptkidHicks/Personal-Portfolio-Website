import { Route, Switch } from "react-router-dom";

import HeaderBar from "./HeaderFooter/HeaderBar";
import MainPage from "./Pages/MainPage";
import AboutMe from "./Pages/AboutMe";

import HeaderBarMobile from "./HeaderFooter/HeaderBarMobile";
import MainMobile from "./MobilePages/MainMobile";

function App() {
  if (window.screen.width <= 1024) {
    return (
      <div>
        <HeaderBarMobile />
        <Switch>
          <Route path="/" exact>
            <MainMobile />
          </Route>
        </Switch>
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
