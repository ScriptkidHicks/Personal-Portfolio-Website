import { Link } from "react-router-dom";
import classes from "../CssSheets/NextProjectLink.module.css";

function NextProjectLink(Props) {
  return (
    <div className={classes.projectLink}>
      <Link to={Props.linkDirection} className={classes.linkItself}>
        {Props.linkPhrase} {">"}
      </Link>
    </div>
  );
}

export default NextProjectLink;
