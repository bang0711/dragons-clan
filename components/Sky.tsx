import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    pSphere1_lambert2_0: THREE.Mesh;
  };
  materials: {
    lambert2: THREE.MeshPhysicalMaterial;
  };
};

export function Sky(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/sky.glb") as GLTFResult;
  return (
    <group scale={5} {...props}>
      <group rotation={[1.6, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pSphere1_lambert2_0.geometry}
            material={materials.lambert2}
            rotation={[Math.PI / 2, 0, 0]}
            scale={5.4}
          />
        </group>
      </group>
    </group>
  );
}
useGLTF.preload("/models/sky.glb");
