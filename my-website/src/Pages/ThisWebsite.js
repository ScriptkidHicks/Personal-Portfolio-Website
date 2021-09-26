import classes from "../CssSheets/ThisWebsite.module.css";
import NextProjectLink from "../Components/NextProjectLink";

import recursive from "../Images/recursive.png";

function ThisWebsite() {
  return (
    <div className={classes.mainBody}>
      <div className={classes.introPic}></div>
      <div className={classes.bgtext}>
        <h1>This Website</h1>
        <p>
          I built the website you're on using react framework, and hosted it on
          github
        </p>
      </div>
      <div className={classes.descriptor}>
        <p>
          This website is built in the style of the original squarespace website
          I set up during my software year. It seemed like a good opportunity to
          show off my work as a front end developer. I spent most of August of
          2021 learning react, largely thanks to my friend Adam. After
          practicing by building a subreddit search wrapper, and the beginnings
          of a D&D website, I felt comfortable setting up this project.
        </p>
      </div>
      <img
        src={recursive}
        alt="a recursive shot of the site"
        className={classes.recursiveImage}
      ></img>
      <div className={classes.continued}>
        <p>
          Building this website ended up being a learning experience, and
          definitely increased my skills with CSS. It was initially a bit of a
          challenge to get images to change over to a text descriptor when the
          user hovered their mouse over the project card. Additional challenges
          included setting up an image as a static background, and developing a
          second presentation of the site for mobile. As of 9/22/21 I'm still
          working on getting the content to fade in as you scroll down the page.
        </p>
      </div>
      <div className={classes.gitReference}>
        <p>
          If you like what you see here, you can find the code for React that I
          used to build it on my github page. Link below.
        </p>
      </div>
      <div className={classes.gitLink}>
        <a
          href="https://github.com/ScriptkidHicks/Personal-Portfolio-Website"
          className={classes.inner}
        >
          The React for This Website
        </a>
      </div>
      <div className={classes.nextLink}>
        <NextProjectLink
          linkDirection="/SudokuSolver"
          linkPhrase="Sudoku Solver"
        />
      </div>
    </div>
  );
}

export default ThisWebsite;
