import React from "react";
import Video from "../../videos/video.mp4";
import { Container, Bg, VideoBg, Content, H1, P } from "./HomeElements";

const HomeSection = () => {
  return (
    <Container id="home">
      <Bg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp3" />
      </Bg>
      <Content>
        <H1>Welcome to my portfolio</H1>
        <P>Embark on this evergrowing learning journey</P>
      </Content>
    </Container>
  );
};

export default HomeSection;
