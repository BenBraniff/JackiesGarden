// import { useState } from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Home/Homepage";
import Store from "./components/Store/Store";
import Map from "./components/Map/Map";
import About from "./components/About/About";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Router basename="/JackiesGarden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


// import stuff for 3d render
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Garden from "../public/garden/Garden";
// import Earth from "../public/earth/Earth";

// <Canvas camera={{ position: [20, 10, 20], fov: 45 }}>
//   <ambientLight />
//   <OrbitControls />
//   <Suspense fallback={null}>
//     <Garden />
//   </Suspense>
// </Canvas>;