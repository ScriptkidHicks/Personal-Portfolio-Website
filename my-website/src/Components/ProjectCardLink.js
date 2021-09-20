import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "../CssSheets/ProjectCardLink.module.css";

function ProjectCardLink(Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={classes.pdiv}>
      <Link
        className={classes.linkBody}
        to={Props.cardLink}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && <div className={classes.hoverText}>{Props.hoverText}</div>}
        {!hovered && (
          <img
            alt={Props.altText}
            src={Props.source}
            className={classes.image}
          ></img>
        )}
      </Link>
    </div>
  );
}

export default ProjectCardLink;
