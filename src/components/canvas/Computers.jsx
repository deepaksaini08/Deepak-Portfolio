import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Define lighting constants
  const LIGHT_INTENSITY = 0.15;
  const SPOT_LIGHT_ANGLE = 0.12;
  const SPOT_LIGHT_PENUMBRA = 1;
  const SPOT_LIGHT_INTENSITY = 1;
  const POINT_LIGHT_INTENSITY = 1;

  // Define positioning constants
  const COMPUTER_SCALE = isMobile ? 0.7 : 0.75;
  const COMPUTER_POSITION = isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5];
  const COMPUTER_ROTATION = [-0.01, -0.2, -0.1];

  return (
    <mesh>
      <hemisphereLight intensity={LIGHT_INTENSITY} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={SPOT_LIGHT_ANGLE}
        penumbra={SPOT_LIGHT_PENUMBRA}
        intensity={SPOT_LIGHT_INTENSITY}
        castShadow
        shadow-mapSize={1024} 
      />
      <pointLight intensity={POINT_LIGHT_INTENSITY} />
      <primitive
        object={computer.scene}
        scale={COMPUTER_SCALE}
        position={COMPUTER_POSITION}
        rotation={COMPUTER_ROTATION}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 786px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]} // Reduced DPR for better performance
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;