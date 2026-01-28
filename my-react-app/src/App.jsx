import { useState } from "react";
import "./App.css";

// import stuff for 3d render
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Garden from "../public/garden/Garden";
import Earth from "../public/earth/Earth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello Jackie's Garden</h1>
      <Canvas camera={{ position: [20, 10, 20], fov: 45 }}>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Garden />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
