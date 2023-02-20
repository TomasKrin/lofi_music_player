import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[40, 300, 500]} scale={1}>
      <MeshDistortMaterial color="teal" attach="material" distort={0.9} speed={2} roughness={1} />
    </Sphere>
  );
};

export default AnimatedSphere;
