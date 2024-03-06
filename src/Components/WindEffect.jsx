import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Instances, Instance } from "@react-three/drei";
import { AdditiveBlending, DoubleSide, MathUtils } from "three";
import gsap from "gsap";
import * as THREE from "three";

function WindShape() {
  const ref = useRef();

  let randomPosition = {
    x: 0,
    y: 0,
    z: 0,
  };
  let randomSpeed = 0;

  const resetRandomPosition = () => {
    randomPosition = {
      x: MathUtils.randFloatSpread(8),
      y: MathUtils.randFloatSpread(5),
      z: MathUtils.randFloatSpread(8),
    };
    randomSpeed = MathUtils.randFloat(16, 20);
  };

  resetRandomPosition();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.z += randomSpeed * delta * 0.02;
      if (ref.current.position.z > 5) {
        resetRandomPosition();
        ref.current.position.z = randomPosition.z;
      }
    }
  });

  const randomColor = () => {
    return new THREE.Color(Math.random(), Math.random(), Math.random());
  };

  const randomSize = () => {
    return MathUtils.randFloat(0.2, 1.0); // Adjust min and max size values
  };

  return (
    <Instance
      ref={ref}
      color={"#fff"}
      position={[randomPosition.x, randomPosition.y, randomPosition.z]}
      rotation-y={Math.PI / 2}
      scale={0.02}
    />
  );
}

const WindEffect = ({ isMoving }) => {
  const materialRef = useRef();
  const INSTANCE = {
    number: 250,
  };

  return (
    <group>
      <Instances>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshBasicMaterial
          side={DoubleSide}
          blending={AdditiveBlending}
          ref={materialRef}
          transparent
        />
        {Array(INSTANCE.number)
          .fill()
          .map((_, key) => (
            <WindShape key={key} />
          ))}
      </Instances>
    </group>
  );
};

export default WindEffect;
