import { Link } from "react-router-dom";
import classes from "../CssSheets/NextProjectLink.module.css";

function NextProjectLink(Props) {
  return (
    <div>
      <Link to={Props.linkDirection}>{Props.linkPhrase}</Link>
    </div>
  );
}

export default NextProjectLink;
