import classes from "../CssSheets/MainPage.module.css";
import profilePic from "../Images/casual.jpg";

function MainPage() {
  return (
    <div className={classes.main}>
      <img src={profilePic} alt="Tammas Hicks" className={classes.profile} />
      <div className={classes.introduction}>
        Hi! I'm Tammas, a Programmer currently based out of Eugene, Oregon. I'm
        currently attending the UO for a degree in computer information science.
        I'm working towards a career in front end development, and over the last
        two months I've been learning React. I'm interested in the ways we can
        use programming and technology to tell stories, and to improve the lives
        of the most underserved among us.
      </div>
    </div>
  );
}

export default MainPage;
