import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import "./FurryTorus.css";

const FurryTorus = () => {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const time = state.clock.getElapsedTime();

    group.current.rotation.y = time * 0.18;

    group.current.rotation.x = Math.sin(time * 0.35) * 0.12;

    group.current.rotation.z = Math.cos(time * 0.25) * 0.04;

    group.current.position.y = Math.sin(time * 0.7) * 0.12;
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* Base torus */}

      <mesh>
        <torusGeometry args={[2.0, 0.62, 64, 128]} />

        <meshStandardMaterial color="#7c2db5" roughness={0.7} metalness={0} />
      </mesh>

      {/* Fur layers */}

      {Array.from({ length: 10 }).map((_, index) => {
        const scale = 1 + index * 0.012;

        return (
          <mesh key={index} scale={[scale, scale, scale]}>
            <torusGeometry args={[2.0, 0.62, 48, 96]} />

            <meshBasicMaterial
              color={
                new THREE.Color(
                  `hsl(${270 + index * 2}, 65%, ${35 + index * 2}%)`
                )
              }
              transparent
              opacity={0.055}
              side={THREE.DoubleSide}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export default FurryTorus;
