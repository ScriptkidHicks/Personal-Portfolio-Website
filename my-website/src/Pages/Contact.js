import classes from "../CssSheets/Contact.module.css";

function Contact() {
  return (
    <div className={classes.mainBody}>
      <div className={classes.contactTitle}>Contact</div>
      <div className={classes.aboveLine}>
        <hr />
      </div>
      <div className={classes.contactParagraph}>
        <p>
          I'm currently living in Eugene Oregon, and am willing to travel for
          work. If you would like to contact me about front end development,
          please reach out through my email. Email and github links can be found
          in the header bar, or the footer bar of each page. Also feel free to
          reach out if you're working on a passion project, and want to
          collaborate. I'm happy to use my free time to help out with projects
          that create tabletop tools, or make the world a more accessible place.
        </p>
      </div>
      <div className={classes.belowLine}>
        <hr />
      </div>
    </div>
  );
}

export default Contact;
