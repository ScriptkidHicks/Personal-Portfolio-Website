import classes from "../CssSheets/Y86_64PY.module.css";
import NextProjectLink from "../Components/NextProjectLink";

import headerBackground from "../Images/Y86Background.jpg";
import registers from "../Images/Registers.png";
import Updater from "../Images/Updater.png";

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
          to do it. The emulator we were using, built by github user Boginw
          (links to their work below). I built this emulator to mimic that
          simplified Y86-64 version, in a package you could download and run
          locally. It was also a fun exercise to stretch my legs working with
          python.
        </p>
      </div>
      <img
        alt="Register system used by the emulator"
        src={registers}
        className={classes.registerImage}
      ></img>
      <div className={classes.explanation}>
        <p>
          Putting together the pieces of it was fairly simple. Python favors
          object oriented design heavily, so I just structured objects around
          physical components that the processor would have. The only stumbling
          point was setting up object dependencies so that each component of the
          machine could talk to each other component of the machine. The machine
          even has error checking so that if it runs into a user generated
          error, like trying to divide by 0, it will throw an error code, and
          cease processing.
        </p>
      </div>
      <img
        src={Updater}
        alt="an updater for the machine"
        className={classes.updaterImage}
      ></img>
      <div className={classes.outro}>
        <p>
          Currently the machine is functional, but needs both a way to parse
          assembly language input, as well as a graphic user interface. If
          you're interested in contributing either you can find a link to the
          github repository below. Feel free to put in a pull request to the
          orginal project, or clone the code and work on it seperately. All I
          ask is that you make it available to people as a learning tool. You
          can also find a link to the original emulator built by Boginw below.
        </p>
      </div>
      <div className={classes.toGit}>
        <a
          style={{ textDecoration: "inherit", color: "inherit" }}
          href="https://github.com/ScriptkidHicks/Python_Y86-64"
          target="_blank"
          rel="noreferrer"
        >
          My Code on Github
        </a>
      </div>
      <div className={classes.toBoginw}>
        <a
          style={{ textDecoration: "inherit", color: "inherit" }}
          href="https://github.com/boginw/js-y86-64"
          target="_blank"
          rel="noreferrer"
        >
          Boginw's Project on Github
        </a>
      </div>
      <div className={classes.nextLink}>
        <NextProjectLink
          linkDirection="/ThisWebsite"
          linkPhrase="The React for this Website"
        />
      </div>
    </div>
  );
}

export default Y86_64PY;
