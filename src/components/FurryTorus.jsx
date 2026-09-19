import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import "./FurryTorus.css";

const FurryTorus = () => {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const time = state.clock.getElapsedTime();

    /*
      Slow rotation
    */
    group.current.rotation.y = time * 0.18;

    /*
      Small tilt
    */
    group.current.rotation.x = Math.sin(time * 0.35) * 0.12;

    group.current.rotation.z = Math.cos(time * 0.25) * 0.04;

    /*
      Floating movement
    */
    group.current.position.y = Math.sin(time * 0.7) * 0.12;
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <mesh>
        <torusGeometry
          args={[
            2.0, // radius
            0.62, // tube thickness
            64, // radial segments
            128, // tubular segments
          ]}
        />

        <meshStandardMaterial
          color={new THREE.Color("#8b3dcc")}
          roughness={0.55}
          metalness={0.05}
        />
      </mesh>
    </group>
  );
};

export default FurryTorus;
