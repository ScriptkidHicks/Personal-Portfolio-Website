import { Link } from "react-router-dom";

import classes from "../CssSheets/HeaderBar.module.css";
import githubIcon from "../Images/GitIconNoBackground.png";
import EmailIcon from "../Images/EmailIcon.png";
import InstagramIcon from "../Images/InstaIcon.png";

function HeaderBar() {
  return (
    <div className={classes.MainBody}>
      <Link to="/" className={classes.title}>
        Programming work by Tammas Hicks
      </Link>
      <div className={classes.pages}>
        <Link to="/AboutMe" className={classes.aboutLink}>
          About
        </Link>
        <Link to="/Contact" className={classes.contactLink}>
          Contact
        </Link>
      </div>
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
    </div>
  );
}

export default HeaderBar;
