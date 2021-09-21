import classes from "../CssSheets/AboutMe.module.css";

function AboutMe() {
  return (
    <div className={classes.mainBody}>
      <div className={classes.aboutTitle}>About</div>
      <div className={classes.aboveLine}>
        <hr></hr>
      </div>
      <div className={classes.aboutContent}>
        <p>
          I'm a programmer based out of eugene Oregon. I'm currently in school
          at the University of Oregon for a bachelors in Computer information
          Science. I will be completing my degree in June of 2022. I have some
          experience developing bots for discord, as well as some training in
          machine learning, but my current focus is in front end development,
          specializing in react. I would love to build a career focused on
          developing tools for tabletop roleplaying games. I'm drawn to
          programming by the way it asks you to solve puzzles, but also by the
          ways in which we can use technology to make the world a more
          accessible place. All the games and tools I make on my own time can be
          found on my github page, and can be had free of charge or fee.
        </p>
      </div>
      <div className={classes.belowLine}>
        <hr></hr>
      </div>
    </div>
  );
}

export default AboutMe;
