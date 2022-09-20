import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const MainLight = () => {
  const ref: any = useRef();
  // useHelper(ref, THREE.SpotLightHelper, "cyan");

  useFrame(({ gl, scene, camera }) => {
    gl.setPixelRatio(2);
    gl.toneMappingExposure = 1;
    gl.physicallyCorrectLights = true;
    gl.outputEncoding = THREE.sRGBEncoding;
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    camera.updateProjectionMatrix();
    scene.updateMatrixWorld();
    scene.updateMatrix();
  }, -2);

  return <spotLight castShadow color={"white"} ref={ref} position={[0, 10, 4]} intensity={13}></spotLight>;
};

export const SpecLight = () => {
  const ref: any = useRef();
  // useHelper(ref, THREE.SpotLightHelper , 'cyan');

  useEffect(() => {
    if (ref) {
      ref.current.distance = 20;
    }
  }, [ref]);

  return <spotLight castShadow color={"white"} ref={ref} position={[-63, 5, 9]} intensity={10}></spotLight>;
};
