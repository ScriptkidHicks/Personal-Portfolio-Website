import styled from "styled-components";
import { skills } from "@/assets/SkillAssets";
import { useState } from "react";
import projects from "@/assets/ProjectAssets";

const TitleSectionStyle = styled.div`
  background: url("/jimpa.jpg");
  height: 600px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: #77559d;
`;

const TitleStyle = styled.label`
  font-size: 3em;
  font-weight: bold;
  width: 70%;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

const SelfDescriptorStyle = styled.label`
  font-size: 1.2em;
  font-weight: 550;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const LinkButtonDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  color: white;

  @media screen and (min-width: 1100px) {
    position: absolute;
    left: 20px;
  }
`;

const LinkButtonStyle = styled.a`
  background-color: #aa7bdf;
  border-radius: 20px 5px 20px 5px;
  padding: 12px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  overflow: hidden;
  width: auto;
  max-width: 75px;
  transition: ease all 0.4s;

  :hover {
    max-width: 200px;
  }

  @media screen and (max-width: 1100px) {
    width: 200px;
    max-width: 200px;
  }
`;

const LinkButtonImageStyle = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const LinkButtonTextStyle = styled.div`
  white-space: nowrap;
`;

function LinkButton(props) {
  return (
    <LinkButtonStyle href={props.href} target="_blank">
      <LinkButtonImageStyle src={props.source} />
      <LinkButtonTextStyle>{props.children}</LinkButtonTextStyle>
    </LinkButtonStyle>
  );
}

function TitleSection(props) {
  return (
    <TitleSectionStyle id={"HOME"}>
      <TitleStyle>{"Hi, I'm Tammas Hicks"}</TitleStyle>
      <SelfDescriptorStyle id={"ABOUT"}>
        {
          "A full stack developer creating responsive RESTful APIs, and beautiful, responsive frontends."
        }
      </SelfDescriptorStyle>
      <LinkButtonDivStyle>
        <LinkButton
          source={"/EmailIcon.png"}
          href={"mailto:TammasHicks@gmail.com"}
        >
          Email Me
        </LinkButton>
        <LinkButton
          source={"/GitIcon.png"}
          href={"https://github.com/ScriptkidHicks"}
        >
          My Github
        </LinkButton>
        <LinkButton
          source={"/LinkedIn.png"}
          href={"https://www.linkedin.com/in/tammas-hicks/"}
        >
          My Linkedin
        </LinkButton>
      </LinkButtonDivStyle>
    </TitleSectionStyle>
  );
}

//____________________________________________

const AboutSectionStyle = styled.div`
  width: 100vw;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  color: #77559d;
`;

const AboutSectionTitleSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

const AboutSectionTitle = styled.label`
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 20px;
`;

const AboutSectionBarStyle = styled.div`
  background-color: #86dfbb;
  height: 10px;
  width: 300px;
  border-radius: 10px 2px 10px 2px;
`;

const MobileOnlyAboutBar = styled(AboutSectionBarStyle)`
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (min-width: 1100px) {
    display: none;
  }
`;

const AboutBottomRowStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutRowSectionStyle = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const AboutSectionDescriptionStyle = styled.div`
  padding: 30px;
  width: 90%;
  font-size: 1.2em;
  white-space: pre-wrap;
`;

const SkillIconDisplay = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: auto;

  @media screen and (max-width: 1100px) {
    padding: 0px 20px;
  }
`;

const SkillIcon = styled.div`
  background-color: #86dfbb;
  color: white;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 20px 4px;
  margin: 10px;
`;

function AboutSection(props) {
  return (
    <AboutSectionStyle>
      <AboutSectionTitleSectionStyle>
        <AboutSectionTitle>About Me</AboutSectionTitle>
        <AboutSectionBarStyle></AboutSectionBarStyle>
      </AboutSectionTitleSectionStyle>
      <AboutBottomRowStyle>
        <AboutRowSectionStyle>
          <AboutSectionDescriptionStyle>
            {
              "\tI'm a junior software engineer, focused on developing engaging, responsive, and fun frontend designs, as well as the APIs that make them useful. Check out some of my recent projects below."
            }
          </AboutSectionDescriptionStyle>
          <AboutSectionDescriptionStyle>
            {"\tCurrently I work at "}
            <b>{"Plexsys Interface Products"}</b>
            {
              " as an engineer using Scala and C++ to build easy to navigate interfaces, and RESTful APIs that support third party developers."
            }
          </AboutSectionDescriptionStyle>
        </AboutRowSectionStyle>
        <AboutRowSectionStyle>
          <AboutSectionTitle>Skills and Tools</AboutSectionTitle>
          <SkillIconDisplay>
            {skills.map((skill, index) => {
              return <SkillIcon key={index}>{skill}</SkillIcon>;
            })}
          </SkillIconDisplay>
        </AboutRowSectionStyle>
      </AboutBottomRowStyle>
    </AboutSectionStyle>
  );
}

//___________________________________________________

const ProjectSectionOuterStyle = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #f6f4ff;
`;

const ProjectSectionInnerStyle = styled.div`
  width: 90%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #77559d;
`;

const ProjectDisplaySectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 4;
`;

const ProjectSelectionSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  flex-grow: 1;
  height: 600px;

  @media screen and (max-width: 1100px) {
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const ProjectOptionButtonStyle = styled.a`
  background-color: #d0b7ef;
  padding: 20px;
  color: white;
  font-weight: 500;
  font-size: 1.2em;
  width: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 6px;
  transition: ease-in-out 0.2s;
  margin-bottom: 20px;

  :hover {
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    background-color: #aa7bdf;
  }

  @media screen and (max-width: 1100px) {
    background-color: #aa7bdf;
  }
`;

const PictureTitleRow = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  width: 70%;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const ProjectPictureStyle = styled.div`
  background-image: url(${(props) => (props.src ? props.src : "none")});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 270px;
  width: 270px;
  border-radius: 10px 4px;
  margin-bottom: 30px;
`;

const ProjectTitleStyle = styled.div`
  font-size: 3em;
  margin: auto;
  text-align: center;
`;

const ProjectDescription = styled.div`
  width: 100%;
  font-size: 1.2em;
  padding: 40px;
  white-space: pre-wrap;
  margin-bottom: 60px;
`;

const ProjectSkillRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  position: relative;
`;

const ProjectLinkButtonStyle = styled.a`
  background-color: #d0b7ef;
  padding: 15px;

  color: white;
  font-weight: 500;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 6px;
  transition: ease-in-out 0.2s;

  :hover {
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    background-color: #aa7bdf;
  }

  @media screen and (min-width: 1270px) {
    position: absolute;
    right: 10px;
  }

  @media screen and (max-width: 1100px) {
    background-color: #aa7bdf;
  }
`;

function ProjectOptionButton(props) {
  return (
    <ProjectOptionButtonStyle
      href="#PROJECTS"
      onClick={() => props.selectProject()}
    >
      {props.children}
    </ProjectOptionButtonStyle>
  );
}

function ProjectsSection(props) {
  const [projectSummary, setProjectSummary] = useState(projects[0]);

  return (
    <ProjectSectionOuterStyle id={"PROJECTS"}>
      <ProjectSectionInnerStyle>
        <AboutSectionTitleSectionStyle>
          <AboutSectionTitle>Projects</AboutSectionTitle>
          <AboutSectionBarStyle />
        </AboutSectionTitleSectionStyle>
        <AboutBottomRowStyle>
          <ProjectDisplaySectionStyle>
            <PictureTitleRow>
              <ProjectPictureStyle
                src={projectSummary ? projectSummary.image : "/Bugbear.png"}
              />
              <ProjectTitleStyle>
                {projectSummary ? projectSummary.projectTitle : "none"}
              </ProjectTitleStyle>
            </PictureTitleRow>
            <ProjectDescription>
              {projectSummary ? projectSummary.textDescription : "empy"}
            </ProjectDescription>
            <AboutSectionBarStyle />
            <ProjectSkillRow>
              {projectSummary
                ? projectSummary.skills.map((skill, index) => {
                    return <SkillIcon key={index}>{skill}</SkillIcon>;
                  })
                : null}
              <ProjectLinkButtonStyle
                href={projectSummary ? projectSummary.link : ""}
                target="_blank"
              >
                The Github
              </ProjectLinkButtonStyle>
            </ProjectSkillRow>
            <MobileOnlyAboutBar />
          </ProjectDisplaySectionStyle>
          <ProjectSelectionSectionStyle>
            <ProjectOptionButton
              selectProject={() => {
                setProjectSummary(projects[0]);
              }}
            >
              Witch Turn
            </ProjectOptionButton>
            <ProjectOptionButton
              selectProject={() => {
                setProjectSummary(projects[1]);
              }}
            >
              My Fitness Fiend
            </ProjectOptionButton>
            <ProjectOptionButton
              selectProject={() => {
                setProjectSummary(projects[2]);
              }}
            >
              Project Freelancer
            </ProjectOptionButton>
          </ProjectSelectionSectionStyle>
        </AboutBottomRowStyle>
      </ProjectSectionInnerStyle>
    </ProjectSectionOuterStyle>
  );
}

function ContactMeSection(props) {}

export { TitleSection, AboutSection, ProjectsSection, ContactMeSection };
