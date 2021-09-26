import classes from "../CssSheets/SudokuSolver.module.css";
import NextProjectLink from "../Components/NextProjectLink";

import Header from "../Images/SudokuHeader.png";
import Clever from "../Images/Clever.png";

function SudokuSolver() {
  return (
    <div className={classes.mainBody}>
      <img alt="some code" src={Header} className={classes.headerImage} />
      <div className={classes.headerTitle}>
        <h1>A Sudoku Solver in python</h1>
        <p>A weekend project I built in some free hours</p>
      </div>
      <div className={classes.explanation}>
        <p>
          This was a weekend project I did to keep myself in practice. It checks
          the board for apparent and hidden singles, using that combination to
          solve the board. At the end of each cycle it checks for consistency
          and completion. If the board is inconsistent it exits with an error
          code, and if the board is solved, then it exits the loop. The loop
          also tracks if any changes have been made, and if no updates have been
          made, then it will exit entirely. I still want to add a recursive
          solution to the end, in the case that it gets stumped. It could also
          probably use a GUI.
        </p>
      </div>
      <img
        alt="a clever solution"
        src={Clever}
        className={classes.cleverImage}
      />
      <div className={classes.cleverExplanation}>
        <p>
          I'm inordinately proud of this clever clogs solution for traversing
          through the rows of the board, and converting those coordinates to
          appropriate square groupings. You can find a link to the code on
          github on the bottom left of this page.
        </p>
      </div>
      <div className={classes.gitLink}>
        <a
          href="https://github.com/ScriptkidHicks/Python-Sudoku-Solver"
          className={classes.inner}
          target="_blank"
          rel="noreferrer"
        >
          The Code for the Solver
        </a>
      </div>
      <div className={classes.nextLink}>
        <NextProjectLink
          linkPhrase="Subreddit Search Wrapper"
          linkDirection="/SubredditWrapper"
        />
      </div>
    </div>
  );
}

export default SudokuSolver;
