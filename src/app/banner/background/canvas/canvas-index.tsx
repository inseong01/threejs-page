import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { Dispatch, SetStateAction, useContext } from "react";
import { TimezoneContext } from "../../../../context/context-current-time";
import { setAmbientLightIntensity } from "../../../../utils/functions/time/set-ambient-light-intensity";
import CanvasElementsGroup from "./canvas-group";

export default function BannerCanvas({
  setCanvasMount,
}: {
  setCanvasMount: Dispatch<SetStateAction<boolean>>;
}) {
  function onCreatedCanvas() {
    setCanvasMount(true);
  }

  return (
    <Canvas
      onCreated={onCreatedCanvas}
      shadows
      camera={{ position: [0, -150, 0], fov: 60, zoom: 1 }}
    >
      <InsideCanvasComp />
    </Canvas>
  );
}

function InsideCanvasComp() {
  const currentTimezone = useContext(TimezoneContext);
  const intensity = setAmbientLightIntensity(currentTimezone);

  return (
    <>
      <Center>
        <CanvasElementsGroup />
      </Center>
      <ambientLight intensity={intensity} />
      {/* <OrbitControls /> */}
    </>
  );
}
