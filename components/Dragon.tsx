import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
type GLTFResult = GLTF & {
  nodes: {
    Object_236: THREE.SkinnedMesh;
    GLTF_created_0_rootJoint: THREE.Bone;
  };
  materials: {
    fei_long: THREE.MeshPhysicalMaterial;
  };
};

type ActionName = "Rest" | "RideFlyRun" | "RideIdle" | "Idle";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

type Props = {};

function Dragon(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<any>();
  const { nodes, materials, animations } = useGLTF(
    "/models/dragon.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions["Idle"]?.reset().play();
  });

  useFrame(({ clock }) => {
    // Update the dragon's position to make it move in a circular path
    const radius = 80; // Adjust the radius as needed
    const speed = 2;

    // Calculate new position based on time elapsed
    const angle = clock.elapsedTime * -speed;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    // Calculate next position for the next frame
    const nextAngle = angle - speed * 0.1; // small increment in angle
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
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]}>
                <group
                  name="00011fbx_1"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={10}
                >
                  <group name="Object_2_2">
                    <group name="RootNode_3">
                      <group name="00011_4">
                        <group name="Object_5_5">
                          <group
                            name="ride_231"
                            position={[-0.003, 2.877, -0.163]}
                            rotation={[0.001, -0.055, 0]}
                          />
                          <group name="GLTF_created_0">
                            <primitive
                              object={nodes.GLTF_created_0_rootJoint}
                            />
                            <skinnedMesh
                              name="Object_236"
                              geometry={nodes.Object_236.geometry}
                              material={materials.fei_long}
                              skeleton={nodes.Object_236.skeleton}
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

export default Dragon;

useGLTF.preload("/models/dragon.glb");
