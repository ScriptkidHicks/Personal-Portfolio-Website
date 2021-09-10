import classes from "../CssSheets/HeaderBar.module.css";
import githubIcon from "../Images/GitIconNoBackground.png";
import EmailIcon from "../Images/EmailIcon.png";

function HeaderBar() {
  return (
    <div className={classes.MainBody}>
      <h2>Programming work by Tammas Hicks</h2>
      <div className={classes.Links}>
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
