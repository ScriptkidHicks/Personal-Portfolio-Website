import classes from "../CssSheets/ThisWebsite.module.css";

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
    </div>
  );
}

export default ThisWebsite;
