import classes from "../CssSheets/MainPage.module.css";
import ProjectCardLink from "../Components/ProjectCardLink";

import profilePic from "../Images/casual.jpg";
import ColevilleCover from "../Images/ColevilleCover.png";
import Y86Cover from "../Images/Y86Cover.png";
import ThisSiteCover from "../Images/ThisPage.png";
import SudokuCover from "../Images/Sudoku.png";
import RedditCover from "../Images/RedditSearch.png";

function MainPage() {
  return (
    <div className={classes.main}>
      <img src={profilePic} alt="Tammas Hicks" className={classes.profile} />
      <div className={classes.introduction}>
        <div className={classes.greetingTag}>Hi!</div>
        <div className={classes.dash}>
          <hr />
        </div>
        <p className={classes.introductionText}>
          I'm Tammas, a Programmer based out of Eugene, Oregon. I'm currently
          attending the UO for a degree in computer information science. I'm
          working towards a career in front end development, and over the last
          two months I've been learning React. I'm interested in the ways we can
          use programming and technology to tell stories, and to improve the
          lives of the most underserved among us.{" "}
        </p>
      </div>
      <div className={classes.projectsTitle}>--Projects--</div>
      <div>
        <ProjectCardLink
          altText="Coleville Bot"
          hoverText="Coleville Bot"
          source={ColevilleCover}
          cardLink="/ColevilleBot"
        />
        <ProjectCardLink
          altText="Y86_64.py"
          hoverText="Y86_64.py"
          source={Y86Cover}
          cardLink="/Y86-64"
          //VS code is producing an 'identifier expected error' here, and there is no errorr
          // I can't figure out how to get it to stop giving me this error code, so it just lives here now
        />
        <ProjectCardLink
          altText="This Website"
          hoverText="This Website"
          source={ThisSiteCover}
          cardLink="/ThisWebsite"
        />
        <ProjectCardLink
          altText="Python Sudoku Solver"
          hoverText="Sudoku Solver"
          source={SudokuCover}
          cardLink="/SudokuSolver"
        />
        <ProjectCardLink
          altText="Reddit Search"
          hoverText="Subreddit Search Wrapper"
          source={RedditCover}
          cardLink="/SubredditSearch"
        />
      </div>
    </div>
  );
}

export default MainPage;
