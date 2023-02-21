import { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "./AnimatedSphere";

const ThreeApp = () => {
  return (
    <Wrapper>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-1, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
};

export default ThreeApp;

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  canvas {
    height: 450px;
  }
`;
