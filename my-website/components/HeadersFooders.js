import styled from "styled-components";

const HeaderStyle = styled.div`
  background-color: white;
  height: 120px;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 99;
`;

const HeaderContentsStyled = styled.div`
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 50px;
`;

const HeaderPicture = styled.img`
  border-radius: 20px 5px 20px 5px;
  object-fit: cover;
  height: 80px;
  width: 80px;
  margin-right: 20px;
`;

const Name = styled.label`
  color: black;
  font-size: 28px;
  font-weight: bold;
`;

const PictureAndName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const OptionsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const OptionStyle = styled.a`
  color: black;
  font-size: 1.5em;
  font-weight: bold;
  transition: ease-in-out 0.2s;

  :hover {
    color: #aa7bdf;
  }

  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }
`;

function Option(props) {
  return <OptionStyle href={props.link}>{props.children}</OptionStyle>;
}

function HeaderBar() {
  return (
    <HeaderStyle>
      <HeaderContentsStyled>
        <PictureAndName>
          <HeaderPicture src="/me.jpg" />
          <Name>Lillith Hicks</Name>
        </PictureAndName>
        <OptionsRow>
          <Option link={"#HOME"}>Home</Option>
          <Option link={"#ABOUT"}>About</Option>
          <Option link={"#PROJECTS"}>Projects</Option>
          <Option link={"#CONTACT"}>Contact</Option>
        </OptionsRow>
      </HeaderContentsStyled>
    </HeaderStyle>
  );
}

const FooterBarStyle = styled.div`
  background-color: #d4bcef;
  width: 100vw;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FooterContentStyle = styled.div`
  width: 100%;
  max-width: 1800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FooterSubsectionStyle = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-weight: bold;
  color: white;
  font-size: 1em;
`;

const FooterLink = styled.a`
  border-radius: 10px 4px;
  padding: 15px;
  transition: ease 0.3s;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.4);

  :hover {
    box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.4);
  }
`;

const FooterLinkImage = styled.img`
  width: 40px;
`;

function FooterBar(props) {
  return (
    <FooterBarStyle>
      <FooterContentStyle>
        <FooterSubsectionStyle>
          <FooterLink href="https://github.com/ScriptkidHicks" target="_blank">
            <FooterLinkImage src={"/GitIcon.png"} />
          </FooterLink>
          <FooterLink
            href="https://www.linkedin.com/in/tammas-hicks/"
            target="_blank"
          >
            <FooterLinkImage src={"/LinkedIn.png"} />
          </FooterLink>
        </FooterSubsectionStyle>
        <FooterSubsectionStyle>
          <FooterLink href="mailto:TammasHicks@gmail.com">
            TammasHicks@gmail.com
          </FooterLink>
        </FooterSubsectionStyle>
      </FooterContentStyle>
    </FooterBarStyle>
  );
}

export { HeaderBar, FooterBar };
