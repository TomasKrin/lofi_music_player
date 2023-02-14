import { useState, useEffect } from "react";

export const useAudioAnalyser = (audioRef) => {
  const [analyser, setAnalyser] = useState(null);
  const [dataArray, setDataArray] = useState(null);

  useEffect(() => {
    if (audioRef.current) {
      const audioCtx = new AudioContext();
      const source = audioCtx.createMediaElementSource(audioRef.current);
      const analyserNode = audioCtx.createAnalyser();
      source.connect(analyserNode);
      analyserNode.connect(audioCtx.destination);

      setAnalyser(analyserNode);

      const bufferLength = analyserNode.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      setDataArray(dataArray);

      console.log(`a`, analyserNode);
    }

    return () => {
      if (analyser) {
        analyser.disconnect();
      }
    };
  }, [audioRef, analyser]);

  useEffect(() => {
    if (analyser && dataArray) {
      const renderFrame = () => {
        analyser.getByteFrequencyData(dataArray);
        requestAnimationFrame(renderFrame);
      };

      renderFrame();
    }
  }, [analyser, dataArray]);

  return { analyser, dataArray };
};
