import { Route, Switch } from "react-router-dom";

import HeaderBar from "./HeaderFooter/HeaderBar";
import Footer from "./HeaderFooter/Footer";

import MainPage from "./Pages/MainPage";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";

import ColevilleBot from "./Pages/ColevilleBot";
import Y86_64PY from "./Pages/Y86_64Py";
import ThisWebsite from "./Pages/ThisWebsite";
import SudokuSolver from "./Pages/SudokuSolver";
import SubredditWrapper from "./Pages/SubredditWrapper";

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
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/ColevilleBot">
            <ColevilleBot />
          </Route>
          <Route path="/Y86-64">
            <Y86_64PY />
          </Route>
          <Route path="/ThisWebsite">
            <ThisWebsite />
          </Route>
          <Route path="/SudokuSolver">
            <SudokuSolver />
          </Route>
          <Route path="/SubredditWrapper">
            <SubredditWrapper />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
