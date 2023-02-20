import { useRef, useEffect } from "react";

const Canvas = ({ draw, height, width }) => {
  const canvasRef = useRef();
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    draw(context);
  });
  return <canvas ref={canvasRef} height={height} width={width} />;
};

export default Canvas;
