import React from "react";
import * as THREE from "three";
import { Plane } from "@react-three/drei";
import { DoubleSide } from "three";
import pattern from "../../../../public/images/pattern11.svg";
import pattern2 from "../../../../public/images/gradient3.svg";

export function PatternPlane() {
  const base = new THREE.TextureLoader().load(pattern);

  return (
    <>
      <Plane scale={[0.8, 0.8, 0.8]} position={[0, 0, -3.6]} rotation={[Math.PI / -2, 0, 0]} args={[7, 25]}>
        <meshBasicMaterial
          transparent
          color={"white"}
          side={DoubleSide}
          alphaTest={0.3}
          map={base}
          toneMapped
          aoMapIntensity={20}
        />
      </Plane>
    </>
  );
}

export function GradientPlane() {
  const base2 = new THREE.TextureLoader().load(pattern2);
  return (
    <>
      <Plane scale={[1, 1, 1]} position={[0, 0.013, -10]} rotation={[Math.PI / -2, 0, 0]} args={[6, 18]}>
        <meshStandardMaterial
          // transparent
          // roughness={100}
          // metalness={-4}
          color={"white"}
          side={DoubleSide}
          alphaTest={0.01}
          opacity={1}
          map={base2}
          // toneMapped
        />
      </Plane>
    </>
  );
}

export function ShadowPlane() {
  return (
    <>
      <Plane receiveShadow scale={[1, 1, 1]} position={[0, 0.021, -15.4]} rotation={[Math.PI / -2, 0, 0]} args={[8, 60]}>
        <shadowMaterial transparent opacity={0.3} depthWrite color={"rgba(255, 99, 71, 1"} side={DoubleSide} />
      </Plane>
    </>
  );
}
