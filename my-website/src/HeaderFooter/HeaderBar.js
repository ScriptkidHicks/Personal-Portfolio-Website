import { Link } from "react-router-dom";

import classes from "../CssSheets/HeaderBar.module.css";
import githubIcon from "../Images/GitIconNoBackground.png";
import EmailIcon from "../Images/EmailIcon.png";
import InstagramIcon from "../Images/InstaIcon.png";

function HeaderBar() {
  return (
    <div className={classes.MainBody}>
      <h2>Programming work by Tammas Hicks</h2>
      <div className={classes.pages}>
        <Link to="../Pages/AboutMe" className={classes.aboutLink}>
          About
        </Link>
        <Link to="../Pages/Contact" className={classes.contactLink}>
          Contact
        </Link>
      </div>
      <div className={classes.Links}>
        <a href="https://instagram.com/thorfinnhicks/">
          <img
            src={InstagramIcon}
            alt="Instagram Icon"
            className={classes.instaIcon}
          />
        </a>
        <a href="mailto:Tammashicks@gmail.com">
          <img alt="Email Icon" src={EmailIcon} className={classes.emailIcon} />
        </a>
        <a href="https://github.com/ScriptkidHicks">
          <img alt="Gihub Link" src={githubIcon} className={classes.gitIcon} />
        </a>
      </div>
    </div>
  );
}

export default HeaderBar;
