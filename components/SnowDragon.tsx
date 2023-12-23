import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Object_102: THREE.SkinnedMesh;
    GLTF_created_0_rootJoint: THREE.Bone;
  };
  materials: {
    zq127_binglong_1: THREE.MeshStandardMaterial;
  };
};

type ActionName =
  | "deaddown"
  | "stand"
  | "skill01"
  | "run"
  | "atk01"
  | "run end"
  | "skill02";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;
type Props = {};

function SnowDragon(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<any>();
  const { nodes, materials, animations } = useGLTF(
    "/models/snow_dragon.glb"
  ) as GLTFResult;
  const { actions } = useAnimations<any>(animations, group);
  useEffect(() => {
    actions["stand"]?.reset().play();
  });
  useFrame(({ clock }) => {
    // Update the dragon's position to make it move in a circular path
    const radius = 200; // Adjust the radius as needed
    const speed = 2;

    // Calculate new position based on time elapsed
    const angle = clock.elapsedTime * speed;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    // Calculate next position for the next frame
    const nextAngle = angle + speed * 0.1; // small increment in angle
    const nextX = Math.cos(nextAngle) * radius;
    const nextZ = Math.sin(nextAngle) * radius;

    // Direction vector pointing to the next position
    const direction = new THREE.Vector3(nextX - x, 0, nextZ - z);
    direction.normalize(); // Normalize the vector

    // Set the new position
    if (group.current) {
      group.current.position.set(x, group.current.position.y, z);

      // Look in the direction of movement
      const lookAtPosition = new THREE.Vector3().addVectors(
        group.current.position,
        direction
      );
      group.current.lookAt(lookAtPosition);
    }
  });
  return (
    <group position={[-80, 20, -80]} ref={group} {...props}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={30}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Sketchfab_model_0"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={20.612}
              >
                <group
                  name="zq127_binglong_modefbx_1"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                >
                  <group name="Object_2_2">
                    <group name="RootNode_3">
                      <group name="zq127_binglong_mode_4" scale={1.5}>
                        <group name="Object_5_5">
                          <group name="GLTF_created_0">
                            <primitive
                              object={nodes.GLTF_created_0_rootJoint}
                            />
                            <skinnedMesh
                              name="Object_102"
                              geometry={nodes.Object_102.geometry}
                              material={materials.zq127_binglong_1}
                              skeleton={nodes.Object_102.skeleton}
                            />
                            <group name="Object_8_8_correction">
                              <group name="Object_8_8" />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default SnowDragon;

useGLTF.preload("/models/snow_dragon.glb");
