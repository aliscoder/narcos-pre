import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Scenes from "./Scene";
import Loading from "./Loading";

export default function Three({ count }: { count: any }) {
  const [mode, setMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const [height, setHeight] = useState(310);
  const [width, setWidth] = useState(250)



  const changeMode = (e: any) => {
    if (e.keyCode === 67) {
      setMode((res) => !res);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      changeMode(e);
    });
    window.addEventListener("resize", (e) => {
      if (window.innerWidth < 800) setHeight(310);
      // else if (window.innerWidth < 1199) setHeight(70);
      // else if (window.innerWidth < 1400) setHeight(80);
      else setHeight(475);
    });
  }, []);

  useEffect(() => {
    setHeight(window.innerWidth < 768 ? 310 : 475)
    setWidth(window.innerWidth < 768 ? 250 : 375)
  }, []);

  return (
    <div className="three">
      <Suspense fallback={<Loading />}>
        <Canvas
          style={{ height: `${height}px` , width:  `${width}px`}}
          gl={{
            antialias: true,
            alpha: true,
            outputEncoding: THREE.sRGBEncoding,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1,
          }}
          className="canvas"
          shadows={true}
          dpr={[2, 2]}
          performance={{ min: 0.5 }}
        >
          <Scenes
            charCount={count}
            mode={mode}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
