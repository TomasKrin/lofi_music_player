import styled from "styled-components";
import {
  AiFillFastBackward,
  AiFillFastForward,
  AiFillPauseCircle,
  AiFillPlayCircle,
} from "react-icons/ai";

const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }) => {
  return (
    <ControlsContainer>
      <AiFillFastBackward type="button" aria-label="Previous" onClick={onPrevClick} />
      {isPlaying ? (
        <AiFillPauseCircle
          type="button"
          aria-label="Pause"
          onClick={() => onPlayPauseClick(false)}
        />
      ) : (
        <AiFillPlayCircle type="button" aria-label="Play" onClick={() => onPlayPauseClick(true)} />
      )}

      <AiFillFastForward type="button" aria-label="Next" onClick={onNextClick} />
    </ControlsContainer>
  );
};

export default AudioControls;

const ControlsContainer = styled.div`
  font-size: 3em;
`;
