import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import AudioControls from "../../components/AudioControls/AudioControls";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import { mainBackgroundColor } from "../../consts/colors";

const MusicPlayer = ({ songs }) => {
  const [songIndex, setSongIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const song = songs[songIndex];

  const { path } = song;

  const audioRef = useRef(new Audio(path));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    audioRef.current.volume = event.target.value;
  };

  audioRef.current.volume = volume;

  const toPrevTrack = () => {
    if (songIndex - 1 < 0) {
      setSongIndex(songs.length - 1);
    } else {
      setSongIndex(songIndex - 1);
    }
  };

  const toNextTrack = useCallback(() => {
    if (songIndex < songs.length - 1) {
      setSongIndex(songIndex + 1);
    } else {
      setSongIndex(0);
    }
  }, [songIndex, songs.length]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  }, [toNextTrack]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(path);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [songIndex, path, startTimer]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying, path, startTimer]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(path);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    }
  }, [songIndex, path, startTimer]);

  const onScrub = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  let s = parseInt(Math.ceil(audioRef.current.currentTime % 60));
  let m = parseInt((audioRef.current.currentTime / 60) % 60);

  let formattedS = s < 10 ? `0${s}` : `${s}`;
  let formattedTime = `${m}:${formattedS}`;

  return (
    <MainContainer>
      <PageContentContainer>
        <Title>
          <AnimatedText song={[song]} />
        </Title>
        <PlayerContainer>
          <SongTimeBar
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
          />
          <ControlsContainer>
            <AudioControls
              isPlaying={isPlaying}
              onPrevClick={toPrevTrack}
              onNextClick={toNextTrack}
              onPlayPauseClick={setIsPlaying}
            />
            <p>{`${formattedTime}`}</p>
            <VolumeControlBar
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
            />
          </ControlsContainer>
        </PlayerContainer>
      </PageContentContainer>
    </MainContainer>
  );
};

export default MusicPlayer;

const MainContainer = styled.div`
  ${mainBackgroundColor}
  color: white;
  height: 100vh;
`;

const PageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 90vh;
  padding: 25px 40px;
  gap: 50px;
`;

const ControlsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 20px;
  align-items: center;

  p {
    width: 30px;
    font-size: 18px;
  }
`;

const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SongTimeBar = styled.input`
  flex: 1;
  height: 15px;
  -webkit-appearance: none;
  width: 100%;
  background: black;
  transition: background 0.2s ease;
  cursor: pointer;
  &:active {
    background: #482880;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: white;
    height: 15px;
    width: 1rem;
  }
`;

const VolumeControlBar = styled.input`
  height: 15px;
  -webkit-appearance: none;
  background: black;
  transition: background 0.2s ease;
  cursor: pointer;
  &:active {
    background: #482880;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: white;
    height: 15px;
    width: 1rem;
  }
`;

const Title = styled.div`
  display: flex;
  width: 400px;
  height: 90px;
  position: relative;
`;
