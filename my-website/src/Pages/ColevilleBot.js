import classes from "../CssSheets/ColevilleBot.module.css";
import npcManagement from "../Images/ColevilleNPC.png";

function ColevilleBot() {
  return (
    <div className={classes.mainBody}>
      <div className={classes.headerImage}></div>
      <div className={classes.headerText}>
        <h1>The D&D Discord Bot</h1>
        <p>
          Here to help with all your various dungeons and dragons assistant
          needs
        </p>
      </div>
      <div className={classes.descriptor}>
        <p>
          ColveilleBot was a project worked on for a seminar class at the
          University of Oregon, fall of 2021. During that time I was playing a
          lot of dungeons and dragons with my friends, but because we were
          living in different parts of the country we played on discord. We used
          a series of bots to do things like manage music, call information from
          character sheets on roll 20, roll inititive. The bots would sometimes
          break when the pages they pulled from changed, and often they wouldn't
          perform services we needed. I decided to make a discord bot which
          would do simple tasks like roll dice, or keep initiative, and named it
          after one of my favorite DMs, Matt Coleville.
        </p>
      </div>

      <div className={classes.npcExplainer}>
        Coleville Bot is fully equipped to create NPCs, and read back
        information on them. You can add information about those NPCs, and the
        file will update to reflect that new information. This makes it easy to
        keep track of things that have happened to characters throughout the
        campaign. The bot will also let you know if you've used a tool
        incorrectly, and how to use it.
      </div>
      <img
        alt="npc management"
        src={npcManagement}
        className={classes.npcImage}
      />
    </div>
  );
}

export default ColevilleBot;
