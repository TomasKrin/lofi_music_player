import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

const Text = ({ title, author }) => (
  <TextContainer className="text-container">
    <h1>{title}</h1>
    <p>by {author}</p>
  </TextContainer>
);

const AnimatedText = ({ song }) => (
  <TransitionGroup>
    {song.map((composition) => (
      <CSSTransition
        key={`${composition.title}-${composition.author}`}
        classNames="song"
        timeout={500}
        unmountOnExit
      >
        <Text title={composition.title} author={composition.author} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default AnimatedText;

const TextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.song-enter {
    opacity: 0;
  }
  &.song-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in-out;
  }
  &.song-exit {
    opacity: 1;
  }
  &.song-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }
`;
