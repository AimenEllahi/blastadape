import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import WindEffect from "./WindEffect";

export default function Scene() {
  return (
    <div className='relative h-screen w-screen'>
      <Canvas shadows>
        <color attach='background' args={["#000"]} />
        {/* <fog attach="fog" args={["#000", 0, 30]} /> */}
        <ambientLight intensity={3} color={"#3F2305"} />

        <directionalLight
          color={"#ffffff"}
          position={[1, 1, 1.2]}
          intensity={8}
          shadow-mapSize={{ width: 1024, height: 1024 }}
          shadow-bias={-0.001}
        />

        <directionalLight
          color={"#ffffff"}
          position={[10, 10, 10]}
          intensity={1}
          shadow-mapSize={{ width: 1024, height: 1024 }}
          shadow-bias={-0.001}
        />

        <Suspense fallback={null}>
          <Environment preset='sunset' />
          <WindEffect />
        </Suspense>
      </Canvas>
    </div>
  );
}
