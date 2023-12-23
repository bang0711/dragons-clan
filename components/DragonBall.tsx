import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_9: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_32: THREE.Mesh;
    Object_40: THREE.Mesh;
    Object_41: THREE.Mesh;
    Object_42: THREE.Mesh;
    Object_43: THREE.Mesh;
    Object_44: THREE.Mesh;
    Object_46: THREE.Mesh;
    Object_53: THREE.Mesh;
    Object_54: THREE.Mesh;
    Object_55: THREE.Mesh;
    Object_56: THREE.Mesh;
    Object_57: THREE.Mesh;
    Object_58: THREE.Mesh;
    Object_60: THREE.Mesh;
    Object_67: THREE.Mesh;
    Object_68: THREE.Mesh;
    Object_69: THREE.Mesh;
    Object_70: THREE.Mesh;
    Object_71: THREE.Mesh;
    Object_72: THREE.Mesh;
    Object_73: THREE.Mesh;
    Object_75: THREE.Mesh;
    Object_82: THREE.Mesh;
    Object_83: THREE.Mesh;
    Object_84: THREE.Mesh;
    Object_85: THREE.Mesh;
    Object_87: THREE.Mesh;
  };
  materials: {
    ["lambert2SG.001"]: THREE.MeshPhysicalMaterial;
    material: THREE.MeshPhysicalMaterial;
    ["lambert2SG.002"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.003"]: THREE.MeshPhysicalMaterial;
    ["material.001"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.004"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.005"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.006"]: THREE.MeshPhysicalMaterial;
    ["material.002"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.011"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.012"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.013"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.014"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.015"]: THREE.MeshPhysicalMaterial;
    ["material.004"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.016"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.017"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.018"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.019"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.020"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.021"]: THREE.MeshPhysicalMaterial;
    ["material.005"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.022"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.023"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.024"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.025"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.026"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.027"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.028"]: THREE.MeshPhysicalMaterial;
    ["material.006"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.029"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.030"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.031"]: THREE.MeshPhysicalMaterial;
    ["lambert2SG.032"]: THREE.MeshPhysicalMaterial;
    ["material.007"]: THREE.MeshPhysicalMaterial;
  };
};

type ActionName = "Mesh_Mesh_head_geo.001_lambert2SG.001Action";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;
function DragonBall(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<any>();
  const { nodes, materials, animations } = useGLTF(
    "/models/dragonball.glb"
  ) as GLTFResult;
  const { actions } = useAnimations<any>(animations, group);
  useEffect(() => {
    actions["Mesh_Mesh_head_geo.001_lambert2SG.001Action"]?.reset().play();
  });
  return (
    <group position={[-2, 15, -6]} ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sketchfab_model_6" rotation={[-Math.PI / 2, 0, 0]}>
                <group name="root_5">
                  <group
                    name="GLTF_SceneRootNode_4"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="���������_1_3"
                      position={[0, 6.102, 0]}
                      scale={4.5}
                    >
                      <group
                        name="Mesh_Mesh_head_geo001_lambert2SG001_0_1"
                        scale={0.222}
                      >
                        <group name="Object_6_0" scale={1.5}>
                          <mesh
                            name="Object_9"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_9.geometry}
                            material={materials["lambert2SG.001"]}
                          />
                        </group>
                      </group>
                      <group name="Object_4_2">
                        <mesh
                          name="Object_11"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_11.geometry}
                          material={materials.material}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="Sketchfab_model001_15"
                position={[-10.546, 0, -5.875]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <group name="root001_14">
                  <group
                    name="GLTF_SceneRootNode001_13"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="���������_1001_12"
                      position={[0, 6.102, 0]}
                      scale={4.5}
                    >
                      <group
                        name="Mesh_Mesh_head_geo001_lambert2SG001_0001_10"
                        scale={0.222}
                      >
                        <group name="Object_6001_9" position={[0.199, 0, 0]}>
                          <mesh
                            name="Object_18"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_18.geometry}
                            material={materials["lambert2SG.002"]}
                          />
                          <mesh
                            name="Object_19"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_19.geometry}
                            material={materials["lambert2SG.003"]}
                          />
                        </group>
                      </group>
                      <group name="Object_4001_11">
                        <mesh
                          name="Object_21"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_21.geometry}
                          material={materials["material.001"]}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="Sketchfab_model002_22"
                position={[-10.544, 0, 6.414]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <group name="root002_21">
                  <group
                    name="GLTF_SceneRootNode002_20"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="���������_1002_19"
                      position={[0, 6.102, 0]}
                      scale={4.5}
                    >
                      <group
                        name="Mesh_Mesh_head_geo001_lambert2SG001_0002_17"
                        scale={0.222}
                      >
                        <group name="Object_6002_16" scale={0.8}>
                          <mesh
                            name="Object_28"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_28.geometry}
                            material={materials["lambert2SG.004"]}
                          />
                          <mesh
                            name="Object_29"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_29.geometry}
                            material={materials["lambert2SG.005"]}
                          />
                          <mesh
                            name="Object_30"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_30.geometry}
                            material={materials["lambert2SG.006"]}
                          />
                        </group>
                      </group>
                      <group name="Object_4002_18">
                        <mesh
                          name="Object_32"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_32.geometry}
                          material={materials["material.002"]}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="Mesh_Mesh_head_geo001_lambert2SG001_0003_25"
                scale={0.222}
              />
              <group
                name="Sketchfab_model004_32"
                position={[10.517, 0, 6.414]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <group name="root004_31">
                  <group
                    name="GLTF_SceneRootNode004_30"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="���������_1004_29"
                      position={[0, 6.102, 0]}
                      scale={4.5}
                    >
                      <group
                        name="Mesh_Mesh_head_geo001_lambert2SG001_0004_27"
                        scale={0.222}
                      >
                        <group name="Object_6004_26">
                          <mesh
                            name="Object_40"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_40.geometry}
                            material={materials["lambert2SG.011"]}
                          />
                          <mesh
                            name="Object_41"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_41.geometry}
                            material={materials["lambert2SG.012"]}
                          />
                          <mesh
                            name="Object_42"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_42.geometry}
                            material={materials["lambert2SG.013"]}
                          />
                          <mesh
                            name="Object_43"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_43.geometry}
                            material={materials["lambert2SG.014"]}
                          />
                          <mesh
                            name="Object_44"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_44.geometry}
                            material={materials["lambert2SG.015"]}
                          />
                        </group>
                      </group>
                      <group name="Object_4004_28">
                        <mesh
                          name="Object_46"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_46.geometry}
                          material={materials["material.004"]}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="Sketchfab_model005_39"
                position={[10, 0, -6.421]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <group name="root005_38">
                  <group
                    name="GLTF_SceneRootNode005_37"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="���������_1005_36"
                      position={[0, 6.102, 0]}
                      scale={4.5}
                    >
                      <group
                        name="Mesh_Mesh_head_geo001_lambert2SG001_0005_34"
                        scale={0.222}
                      >
                        <group name="Object_6005_33" position={[0, -0.154, 0]}>
                          <mesh
                            name="Object_53"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_53.geometry}
                            material={materials["lambert2SG.016"]}
                          />
                          <mesh
                            name="Object_54"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_54.geometry}
                            material={materials["lambert2SG.017"]}
                          />
                          <mesh
                            name="Object_55"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_55.geometry}
                            material={materials["lambert2SG.018"]}
                          />
                          <mesh
                            name="Object_56"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_56.geometry}
                            material={materials["lambert2SG.019"]}
                          />
                          <mesh
                            name="Object_57"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_57.geometry}
                            material={materials["lambert2SG.020"]}
                          />
                          <mesh
                            name="Object_58"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_58.geometry}
                            material={materials["lambert2SG.021"]}
                          />
                        </group>
                      </group>
                      <group name="Object_4005_35">
                        <mesh
                          name="Object_60"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_60.geometry}
                          material={materials["material.005"]}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="Sketchfab_model006_46"
                position={[0, 0, -11.316]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <group name="root006_45">
                  <group
                    name="GLTF_SceneRootNode006_44"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="���������_1006_43"
                      position={[0, 6.102, 0]}
                      scale={4.5}
                    >
                      <group
                        name="Mesh_Mesh_head_geo001_lambert2SG001_0006_41"
                        scale={0.222}
                      >
                        <group name="Object_6006_40">
                          <mesh
                            name="Object_67"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_67.geometry}
                            material={materials["lambert2SG.022"]}
                          />
                          <mesh
                            name="Object_68"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_68.geometry}
                            material={materials["lambert2SG.023"]}
                          />
                          <mesh
                            name="Object_69"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_69.geometry}
                            material={materials["lambert2SG.024"]}
                          />
                          <mesh
                            name="Object_70"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_70.geometry}
                            material={materials["lambert2SG.025"]}
                          />
                          <mesh
                            name="Object_71"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_71.geometry}
                            material={materials["lambert2SG.026"]}
                          />
                          <mesh
                            name="Object_72"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_72.geometry}
                            material={materials["lambert2SG.027"]}
                          />
                          <mesh
                            name="Object_73"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_73.geometry}
                            material={materials["lambert2SG.028"]}
                          />
                        </group>
                      </group>
                      <group name="Object_4006_42">
                        <mesh
                          name="Object_75"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_75.geometry}
                          material={materials["material.006"]}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="Sketchfab_model003_53"
                position={[0, 0, 11.873]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <group name="root007_52">
                  <group
                    name="GLTF_SceneRootNode007_51"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="���������_1003_50"
                      position={[0, 6.102, 0]}
                      scale={4.5}
                    >
                      <group
                        name="Mesh_Mesh_head_geo001_lambert2SG001_0007_48"
                        scale={0.222}
                      >
                        <group
                          name="Object_6003_47"
                          position={[1.644, 1.685, 0]}
                        >
                          <mesh
                            name="Object_82"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_82.geometry}
                            material={materials["lambert2SG.029"]}
                          />
                          <mesh
                            name="Object_83"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_83.geometry}
                            material={materials["lambert2SG.030"]}
                          />
                          <mesh
                            name="Object_84"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_84.geometry}
                            material={materials["lambert2SG.031"]}
                          />
                          <mesh
                            name="Object_85"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_85.geometry}
                            material={materials["lambert2SG.032"]}
                          />
                        </group>
                      </group>
                      <group name="Object_4003_49">
                        <mesh
                          name="Object_87"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_87.geometry}
                          material={materials["material.007"]}
                        />
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

export default DragonBall;

useGLTF.preload("/models/dragonball.glb");
