"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { Island } from "@/components/Island";
import { OrbitControls } from "@react-three/drei";
import { Sky } from "@/components/Sky";
import Dragon from "@/components/Dragon";
import God from "@/components/God";
import SnowDragon from "@/components/SnowDragon";
import DragonBall from "@/components/DragonBall";
type Props = {};

function HomePage({}: Props) {
  return (
    <section className="w-full h-screen relative cursor-grab">
      <Canvas
        camera={{ position: [325, 100, 0], rotation: [0, Math.PI / 2, 0] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            // skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <OrbitControls
            maxDistance={250}
            minDistance={50}
            // autoRotate
            enableZoom
            enablePan
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
          />
          {/* 
         
          <Land />
          */}{" "}
          <Dragon />
          <Sky />
          {/* <Land /> */}
          <DragonBall />
          <SnowDragon />
          <God />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default HomePage;
