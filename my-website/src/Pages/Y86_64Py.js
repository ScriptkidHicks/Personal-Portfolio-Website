import classes from "../CssSheets/Y86_64PY.module.css";

import headerBackground from "../Images/Y86Background.jpg";
import registers from "../Images/Registers.png";

function Y86_64PY() {
  return (
    <div className={classes.mainBody}>
      <img
        alt="Y86 background, blurred"
        src={headerBackground}
        className={classes.headerImage}
      ></img>
      <div className={classes.titleCard}>
        <h1>A Python Based Y86-64 Emulator</h1>
        <br />
        <p>&emsp;&emsp; Built to be free and accessible</p>
      </div>
      <div className={classes.introParagraph}>
        <p>
          I built this emulator when I was taking CIS 314. We were learning a
          simplified version of assembly language, and were using a Y86 emulator
          to do it. It was in the middle of the pandemic, and I had been reading
          a lot of articles about how inability to access good internet was a
          barrier to learning for poor families. The emulator we were using,
          built by github user Boginw (links to their work below), and it was
          great, but it was only accessible via the internet. I built this
          emulator to mimic that simplified Y86-64 version, but in a package you
          could download and run locally. It was also a fun exercise to stretch
          my legs working with python.
        </p>
      </div>
      <img
        alt="Register system used by the emulator"
        src={registers}
        className={classes.registerImage}
      ></img>
    </div>
  );
}

export default Y86_64PY;
