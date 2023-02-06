import React from "react";
import { render, screen } from "@testing-library/react";
import AnimatedText from "./AnimatedText";

describe("AnimatedText component", () => {
  it("renders without crashing", () => {
    const songs = [
      { title: "Song 1", author: "Author 1" },
      { title: "Song 2", author: "Author 2" },
      { title: "Song 3", author: "Author 3" },
    ];
    render(<AnimatedText song={songs} />);
  });

  it("renders the correct number of Text components", () => {
    const songs = [
      { title: "Song 1", author: "Author 1" },
      { title: "Song 2", author: "Author 2" },
      { title: "Song 3", author: "Author 3" },
    ];
    render(<AnimatedText song={songs} />);
    const textComponents = screen.getAllByTestId("text-component");
    expect(textComponents.length).toEqual(songs.length);
  });
});
