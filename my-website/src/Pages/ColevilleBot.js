import classes from "../CssSheets/ColevilleBot.module.css";

import NextProjectLink from "../Components/NextProjectLink";

import npcManagement from "../Images/ColevilleNPC.png";
import ColevilleSpell from "../Images/ColevilleSpell.png";
import Educated from "../Images/ColevilleEducated.png";

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
      <img
        alt="A Coleville Spell"
        src={ColevilleSpell}
        className={classes.coleSpell}
      />
      <div className={classes.spellDescription}>
        <p>
          The Coleville Bot has all the main spells on hand, including
          information about their casting details. He can quote information
          about them at you if you need to remember things like which saving
          throw is used, or the range of the spell. This can save you valuable
          time searching online, and means that everyone is looking at the same
          information.
        </p>
      </div>
      <img
        alt="He is an educated bot"
        src={Educated}
        className={classes.edPic}
      />
      <div className={classes.edDescrip}>
        <p>He's also quite an educated bot</p>
      </div>
      <div className={classes.pyDescriptor}>
        <p>
          I built him using the Discord.py library, building on the command
          structure. Because of the way I built the bot it can only be
          interfaced with through text commands. I would like to eventually
          circle back around and make modifications so that the bot can do
          things like react to emojis; but that is built on a different
          framework in the library. You can find links to both my code for the
          bot, and the Discord.py document pages, below. Feel free to make pull
          requests for changes to the bot itself. I'm always happy to update it
          so that people can get more functionality out of it.
        </p>
      </div>
      <div className={classes.toGit}>
        <a
          style={{ textDecoration: "inherit", color: "inherit" }}
          href="https://github.com/ScriptkidHicks/ColvilleBot"
          target="_blank"
          rel="noreferrer"
        >
          My ColeVille Code
        </a>
      </div>
      <div className={classes.toDiscordpy}>
        <a
          style={{ textDecoration: "inherit", color: "inherit" }}
          href="https://discordpy.readthedocs.io/en/stable/"
          target="_blank"
          rel="noreferrer"
        >
          Discord.py Documentation
        </a>
      </div>
      <div className={classes.nextLink}>
        <NextProjectLink
          linkDirection="/Y86-64"
          linkPhrase="The Y86-64 emulator"
        />
      </div>
    </div>
  );
}

export default ColevilleBot;
