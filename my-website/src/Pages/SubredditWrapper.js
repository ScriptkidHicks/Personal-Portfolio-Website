import classes from "../CssSheets/SubredditWrapper.module.css";
import NextProjectLink from "../Components/NextProjectLink";

import Wrapper from "../Images/Wrapper.png";

function SubredditWrapper() {
  return (
    <div className={classes.mainBody}>
      <div className={classes.headerText}>
        <h1>A Wrapper for Searching Reddit</h1>
        <p>
          {/*"This is bad, and I'm gonna come back and fix it later. -said every person with adhd ever"*/}
          &emsp;&emsp;&emsp;&emsp;a small exercise in using React to interface
          with the Reddit API
        </p>
      </div>
      <div className={classes.introExplanation}>
        <p>
          I started this project after a friend talked to me about doing
          something very similar with the Reddit r/business Subreddit for a job
          interview. He had used javascript for it, and I was just starting to
          learn React at the time, so creating a wrapper which could be directed
          to search various subreddits for the top posts, sorted by the metric
          the user chose, seemed like a good way to practice the job skills that
          would be necessary if I wanted to do front end dev work in React.
        </p>
      </div>
      <img
        alt="Wrapper aesthetics"
        src={Wrapper}
        className={classes.wrapperDisplay}
      />
      <div className={classes.outro}>
        <p>
          I would like to add polish to the project by adding the ability for
          the user to change the number of posts they see, and the timeframe
          they're sorted in. I would also love to make some changes to the
          aesthetic so that it's a bit more sleek, appealing, and reflective of
          my current CSS abilities. You can find the a link to the code for this
          project at the bottom left, as well as a link to the code my friend
          wrote for his interview at the bottom center.
        </p>
      </div>
      <div className={classes.gitLink}>
        <a
          href="https://github.com/ScriptkidHicks/A-search-interface-for-Reddit"
          className={classes.inner}
          target="_blank"
          rel="noreferrer"
        >
          The Code for the Wrapper
        </a>
      </div>
      <div className={classes.friendLink}>
        <a
          href="https://github.com/Sephta/stal-rbv"
          className={classes.inner}
          target="_blank"
          rel="noreferrer"
        >
          My Friend's Code
        </a>
      </div>
      <div className={classes.nextLink}>
        <NextProjectLink
          linkDirection="/ColevilleBot"
          linkPhrase="Coleville Bot"
        />
      </div>
    </div>
  );
}

export default SubredditWrapper;
