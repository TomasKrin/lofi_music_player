import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AudioControls from "./AudioControls";

describe("AudioControls", () => {
  it("should call onPlayPauseClick with the correct argument when play/pause button is clicked", () => {
    const onPlayPauseClick = jest.fn();
    render(<AudioControls isPlaying={false} onPlayPauseClick={onPlayPauseClick} />);
    const playButton = screen.getByLabelText("Play");
    fireEvent.click(playButton);
    expect(onPlayPauseClick).toHaveBeenCalledWith(true);

    render(<AudioControls isPlaying={true} onPlayPauseClick={onPlayPauseClick} />);
    const pauseButton = screen.getByLabelText("Pause");
    fireEvent.click(pauseButton);
    expect(onPlayPauseClick).toHaveBeenCalledWith(false);
  });

  it("should call onPrevClick and onNextClick when prev/next button is clicked", () => {
    const onPrevClick = jest.fn();
    const onNextClick = jest.fn();
    render(<AudioControls isPlaying={false} onPrevClick={onPrevClick} onNextClick={onNextClick} />);
    const prevButton = screen.getByLabelText("Previous");
    fireEvent.click(prevButton);
    expect(onPrevClick).toHaveBeenCalled();

    const nextButton = screen.getByLabelText("Next");
    fireEvent.click(nextButton);
    expect(onNextClick).toHaveBeenCalled();
  });
});
