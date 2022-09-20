import React, { useProgress } from "@react-three/drei";
import { useContext, useEffect } from "react";

export default function Loading() {
  const { active, progress, errors, item, loaded, total } = useProgress();



  return <div>{progress}</div>;
}
