import classes from "../MobileCss/HeaderBarMobile.module.css";
import menuButton from "../Images/MenuIcon.png";

function HeaderBarMobile() {
  return (
    <div className={classes.MainBody}>
      <h2>Programming Work by Tammas Hicks</h2>
      <input
        type="image"
        src={menuButton}
        alt="Dropdown Menu"
        className={classes.menuIcon}
      />
    </div>
  );
}

export default HeaderBarMobile;
