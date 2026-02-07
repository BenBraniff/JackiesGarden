import "./Map.css";

// import stuff for 3d render
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Garden from "../../../public/garden/Garden";
// import Earth from "../public/earth/Earth";

const Map = () => {
  return (
    <>
      <div className="mappage">
        <Canvas camera={{ position: [20, 10, 20], fov: 45 }}>
          <ambientLight />
          <OrbitControls />
          <Suspense fallback={null}>
            <Garden />
          </Suspense>
        </Canvas>
        ;
      </div>
    </>
  );
};

export default Map;
