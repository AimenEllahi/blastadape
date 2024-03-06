import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "./ParticlesConfig.json";

export default function Scene() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="relative h-screen w-screen ">
      <Particles
        id="tsparticles"
        loaded={particlesLoaded}
        options={particleConfig}
        init={particlesInit}
      />
    </div>
  );
}
