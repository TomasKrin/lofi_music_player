import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

const Text = ({ title, author }) => (
  <TextContainer>
    <h1>{title}</h1>
    <p>by {author}</p>
  </TextContainer>
);

const AnimatedText = ({ song }) => (
  <TransitionGroup>
    {song.map((composition) => (
      <CSSTransition key={`${composition.title}-${composition.author}`} timeout={600} unmountOnExit>
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

  &.enter {
    opacity: 0;
  }
  &.enter-active {
    opacity: 1;
    transition: opacity 600ms ease-in-out;
  }
  &.exit {
    opacity: 1;
  }
  &.exit-active {
    opacity: 0;
    transition: opacity 600ms ease-in-out;
  }
`;
