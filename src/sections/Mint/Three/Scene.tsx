import * as THREE from "three";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import PabloObj from "../../../models/PabloObj";
import JavObj from "../../../models/JavObj";
import ElchapoObj from "../../../models/ElchapoObj";
import SteveObj from "../../../models/SteveObj";
import { AdaptiveDpr, AdaptiveEvents, OrbitControls, PerspectiveCamera, Plane } from "@react-three/drei";
import { gsap } from "gsap";
import { MainLight, SpecLight } from "./Lights";
import { PatternPlane, GradientPlane } from "./Planes";
import { DoubleSide } from "three";

let count = 0,
  loading = false;
var yDown: any = null;

export default function Scenes({ mode, charCount }: { mode: any; charCount: any }) {
  const ref: any = useRef();
  // const [firstPosition, setFirstPosition] = useState(
  //   window.innerWidth >= 1400 ? 2 : 0
  // );
  const [pablo, setPablo] = useState<any>();
  const [steve, setSteve] = useState<any>();
  const [jav, setJav] = useState<any>();
  const [elchapo, setElchapo] = useState<any>();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    if (pablo && charCount === 0) {
      pablo.reset();
      pablo.play();
    } else if (steve && charCount === 1) {
      steve.reset();
      steve.play();
    } else if (jav && charCount === 2) {
      jav.reset();
      jav.play();
      elchapo.time = 0;
    } else if (elchapo && charCount === 3) {
      elchapo.reset();
      elchapo.play();
    }
    nextChar();
  }, [pablo, charCount]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      // if (window.innerWidth >= 1400 && ref.current?.position === 0)
      // setFirstPosition(2);
      // else if (window.innerWidth < 1400 && ref.current?.position === 2)
      // setFirstPosition(0);
      let element = document.querySelector("canvas");
      if (element) {
        setWidth(+element.getBoundingClientRect().width);
        setHeight(+element.getBoundingClientRect().height);
      }
    });
  }, []);

  useEffect(() => {}, [ref.current]);

  const nextChar = () => {
    if (charCount === 0) {
      gsap.to(ref.current.position, {
        z: 2,
        duration: 4,
      });
    } else if (charCount === 1) {
      gsap.to(ref.current.position, {
        z: 18,
        duration: 4,
      });
    } else if (charCount === 2) {
      gsap.to(ref.current.position, {
        z: 32,
        duration: 4,
        onStart: () => {},
      });
    } else if (charCount === 3) {
      gsap.to(ref.current.position, {
        z: 46,
        duration: 4,
        onStart: () => {},
      });
    }
  };

  return (
    <>
      <PerspectiveCamera
        position={[-0.1, 3.5, 18]}
        aspect={width / height}
        rotation={[-0.08, 0, 0]}
        fov={19}
        makeDefault
        onUpdate={(c) => c.updateProjectionMatrix()}
      />
      {/* <OrbitControls /> */}
      <fog attach="fog" color="#fbf8f5" near={3} far={53} />
      <ambientLight intensity={0.8} />
      <MainLight />
      <group scale={[1.167, 1.167, 1.167]} ref={ref} position={[0, 0, 2]}>
        <PatternPlane />
        {/* <Plane
            receiveShadow
            scale={[1, 1, 1]}
            position={[0, 0.015, -5.4]}
            rotation={[Math.PI / -2, 0, 0]}
            args={[8, 80]}
          >
            <shadowMaterial
              transparent
              fog
              opacity={0.3}
              depthWrite
              color={"rgba(255, 99, 71, 1"}
              side={DoubleSide}
            />
          </Plane> */}
        <PabloObj setAnimate={setPablo} position={[-1.2, 0, -1.5]} scale={[0.355, 0.355, 0.355]} rotation={[0, 0.8, 0]} />
        {/* <Pablo
            position={[-1.2, 0, -1.5]}
            scale={[2, 2, 2]}
            rotation={[0, 1, 0]}
          /> */}
        <SteveObj setAnimate={setSteve} scale={[0.7, 0.7, 0.7]} position={[1.2, 0, -13.5]} rotation={[0, -0.8, 0]} />
        {/* <Steve
            scale={[2, 2, 2]}
            position={[1.2, 0, -12]}
            rotation={[0, -0.8, 0]}
          /> */}
        <JavObj setAnimate={setJav} scale={[0.67, 0.67, 0.67]} position={[-1.2, 0, -25.5]} rotation={[0, 0.8, 0]} />
        <ElchapoObj setAnimate={setElchapo} scale={[97, 97, 97]} position={[0, 0, -37.5]} rotation={[0, 0, 0]} />
        {/* <Elchapo
            scale={[2, 2, 2]}
            position={[0, 0, -24]}
            rotation={[0, 0, 0]}
          /> */}
      </group>
      {/* <GradientPlane /> */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </>
  );
}
