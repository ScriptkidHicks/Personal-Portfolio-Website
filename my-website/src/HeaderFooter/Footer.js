import classes from "../CssSheets/Footer.module.css";

import githubIcon from "../Images/GitIconNoBackground.png";
import EmailIcon from "../Images/EmailIcon.png";
import InstagramIcon from "../Images/InstaIcon.png";

function Footer() {
  return (
    <div className={classes.mainBody}>
      <div className={classes.Links}>
        <a
          href="https://instagram.com/thorfinnhicks/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={InstagramIcon}
            alt="Instagram Icon"
            className={classes.instaIcon}
          />
        </a>
        <a href="mailto:Tammashicks@gmail.com" target="_blank" rel="noreferrer">
          <img alt="Email Icon" src={EmailIcon} className={classes.emailIcon} />
        </a>
        <a
          href="https://github.com/ScriptkidHicks"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Gihub Link" src={githubIcon} className={classes.gitIcon} />
        </a>
      </div>
      <div className={classes.email}>TammasHicks@gmail.com</div>
      <div className={classes.missionStatement}>
        Contact me if you're looking for a front end dev specializing in React,
        or if you're looking for an AI intern.
      </div>
    </div>
  );
}

export default Footer;
