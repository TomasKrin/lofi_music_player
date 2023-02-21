import { useState } from "react";
import { useMusic } from "../../hooks/music";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import Buttons from "./Buttons";
import styled from "styled-components";
import { mainBackgroundColor } from "../../consts/colors";
import TopBar from "../../components/TopBar/TopBar";

const Home = () => {
  const { data } = useMusic();
  const songs = data || [];
  const [currentSong, setCurrentSong] = useState(null);
  const [started, setStarted] = useState(false);
  const start = () => {
    setCurrentSong(songs[0]);
    setStarted(true);
  };

  if (started) {
    return (
      <Container>
        <TopBar />
        {currentSong && (
          <div style={{}}>
            <MusicPlayer songs={songs}></MusicPlayer>
          </div>
        )}
      </Container>
    );
  } else {
    return (
      <Container>
        <TopBar />
        {songs.length ? (
          <TextAndButtonContainer>
            <Buttons onClick={start} />
            <Footer>
              <a href="https://github.com/TomasKrin">
                For more projects, visit my GitHub profile!!
              </a>
            </Footer>
          </TextAndButtonContainer>
        ) : (
          <LoadingMessage>LOADING...</LoadingMessage>
        )}
      </Container>
    );
  }
};

export default Home;

const Container = styled.div`
  ${mainBackgroundColor}
  color: white;
  height: 100vh;

  @media (max-width: 420px) {
    height: 100%;
  }
`;

const TextAndButtonContainer = styled.div`
  padding-top: 200px;
`;

const LoadingMessage = styled.p`
  padding: 20px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
