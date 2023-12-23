import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
type GLTFResult = GLTF & {
  nodes: {
    Object_8: THREE.SkinnedMesh;
    Object_10: THREE.SkinnedMesh;
    Object_12: THREE.SkinnedMesh;
    Object_14: THREE.SkinnedMesh;
    Object_16: THREE.SkinnedMesh;
    Object_18: THREE.SkinnedMesh;
    Object_20: THREE.SkinnedMesh;
    Object_22: THREE.SkinnedMesh;
    Object_24: THREE.SkinnedMesh;
    Object_26: THREE.SkinnedMesh;
    Object_28: THREE.SkinnedMesh;
    Object_30: THREE.SkinnedMesh;
    Object_32: THREE.SkinnedMesh;
    Object_34: THREE.SkinnedMesh;
    Object_36: THREE.SkinnedMesh;
    Object_38: THREE.SkinnedMesh;
    Object_40: THREE.SkinnedMesh;
    Object_42: THREE.SkinnedMesh;
    Object_44: THREE.SkinnedMesh;
    Object_46: THREE.SkinnedMesh;
    Object_48: THREE.SkinnedMesh;
    Object_50: THREE.SkinnedMesh;
    Object_52: THREE.SkinnedMesh;
    Object_54: THREE.SkinnedMesh;
    Object_56: THREE.SkinnedMesh;
    Object_58: THREE.SkinnedMesh;
    sky_ball_sky_0: THREE.Mesh;
    star_point_star_0: THREE.Mesh;
    star_point1_star_0: THREE.Mesh;
    star_point2_star_0: THREE.Mesh;
    star_point3_star_0: THREE.Mesh;
    star_point4_star_0: THREE.Mesh;
    star_point5_star_0: THREE.Mesh;
    star_point6_star_0: THREE.Mesh;
    star_point7_star_0: THREE.Mesh;
    star_point8_star_0: THREE.Mesh;
    star_point9_star_0: THREE.Mesh;
    star_point10_star_0: THREE.Mesh;
    star_point11_star_0: THREE.Mesh;
    star_point12_star_0: THREE.Mesh;
    star_point13_star_0: THREE.Mesh;
    star_point14_star_0: THREE.Mesh;
    star_point15_star_0: THREE.Mesh;
    star_point16_star_0: THREE.Mesh;
    star_point17_star_0: THREE.Mesh;
    star_point18_star_0: THREE.Mesh;
    star_point19_star_0: THREE.Mesh;
    star_point20_star_0: THREE.Mesh;
    glow_vfx_point_0_glow_stuff_0: THREE.Mesh;
    glow_vfx_point_1_glow_stuff_0: THREE.Mesh;
    glow_vfx_point_2_glow_stuff_0: THREE.Mesh;
    glow_vfx_point_3_glow_stuff_0: THREE.Mesh;
    glow_vfx_point_4_glow_stuff_0: THREE.Mesh;
    glow_vfx_point_0_glow_stuff_0_1: THREE.Mesh;
    glow_vfx_point_1_glow_stuff_0_1: THREE.Mesh;
    glow_vfx_point_2_glow_stuff_0_1: THREE.Mesh;
    glow_vfx_point_3_glow_stuff_0_1: THREE.Mesh;
    glow_vfx_point_4_glow_stuff_0_1: THREE.Mesh;
    glow_vfx_point_0_glow_stuff_0_2: THREE.Mesh;
    glow_vfx_point_1_glow_stuff_0_2: THREE.Mesh;
    glow_vfx_point_2_glow_stuff_0_2: THREE.Mesh;
    glow_vfx_point_3_glow_stuff_0_2: THREE.Mesh;
    glow_vfx_point_4_glow_stuff_0_2: THREE.Mesh;
    Eneergy_Ball_energy_ball_0: THREE.Mesh;
    wave_blink_ring_0_energy_wave_blink_0: THREE.Mesh;
    wave_blink_ring_1_energy_wave_blink_0: THREE.Mesh;
    wave_blink_ring_2_energy_wave_blink_0: THREE.Mesh;
    wave_blink_ring_3_energy_wave_blink_0: THREE.Mesh;
    wave_blink_ring_4_energy_wave_blink_0: THREE.Mesh;
    Dragon_eye_dragon_eye_center_0: THREE.Mesh;
    Dragon_head_dragon_eye_0: THREE.Mesh;
    Eye_ball_inner_dragon_eye_ball_inner_0: THREE.Mesh;
    Eye_ball_out_dragon_eye_ball_out_0: THREE.Mesh;
    Eyecore_a_dragon_eye_core_0: THREE.Mesh;
    Eyecore_b_dragon_eye_core_0: THREE.Mesh;
    ["0"]: THREE.Mesh;
    _rootJoint: THREE.Bone;
    chest_jnt_02: THREE.Bone;
    l_fins_jnt_08: THREE.Bone;
    r_fins_jnt_09: THREE.Bone;
    chest_jnt_011: THREE.Bone;
    l_fins_jnt_017: THREE.Bone;
    r_fins_jnt_018: THREE.Bone;
    chest_jnt_020: THREE.Bone;
    l_fins_jnt_026: THREE.Bone;
    r_fins_jnt_027: THREE.Bone;
    Eye_Core_Jnt_069: THREE.Bone;
  };
  materials: {
    Mask: THREE.MeshPhysicalMaterial;
    Eye_Main: THREE.MeshPhysicalMaterial;
    material: THREE.MeshPhysicalMaterial;
    Body: THREE.MeshStandardMaterial;
    Cloth: THREE.MeshStandardMaterial;
    Deco: THREE.MeshStandardMaterial;
    Pants: THREE.MeshStandardMaterial;
    Deco_Foot: THREE.MeshPhysicalMaterial;
    Cloak_Up: THREE.MeshStandardMaterial;
    Cloak: THREE.MeshPhysicalMaterial;
    fish_body: THREE.MeshPhysicalMaterial;
    fish_eye: THREE.MeshPhysicalMaterial;
    glow_stuff: THREE.MeshStandardMaterial;
    material_13: THREE.MeshStandardMaterial;
    star: THREE.MeshStandardMaterial;
    energy_ball: THREE.MeshPhysicalMaterial;
    energy_wave_blink: THREE.MeshPhysicalMaterial;
    dragon_eye_center: THREE.MeshPhysicalMaterial;
    dragon_eye: THREE.MeshPhysicalMaterial;
    dragon_eye_ball_inner: THREE.MeshStandardMaterial;
    dragon_eye_ball_out: THREE.MeshPhysicalMaterial;
    dragon_eye_core: THREE.MeshStandardMaterial;
    water: THREE.MeshPhysicalMaterial;
  };
};

type ActionName = "normal";

function God(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<any>();
  const { nodes, materials, animations } = useGLTF(
    "/models/god.glb"
  ) as GLTFResult;
  const { actions } = useAnimations<any>(animations, group);

  useEffect(() => {
    actions["normal"]?.reset().play();
  });
  return (
    <group rotation={[0, Math.PI / 2, 0]} ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[5, 17, 2]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.1}
        >
          <group
            name="e9df6537e15349808781771e3514ec64fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="exproted">
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.Mask}
                      skeleton={nodes.Object_8.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.Eye_Main}
                      skeleton={nodes.Object_10.skeleton}
                    />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.material}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials.Body}
                      skeleton={nodes.Object_14.skeleton}
                    />
                    <skinnedMesh
                      name="Object_16"
                      geometry={nodes.Object_16.geometry}
                      material={materials.Cloth}
                      skeleton={nodes.Object_16.skeleton}
                    />
                    <skinnedMesh
                      name="Object_18"
                      geometry={nodes.Object_18.geometry}
                      material={materials.Deco}
                      skeleton={nodes.Object_18.skeleton}
                    />
                    <skinnedMesh
                      name="Object_20"
                      geometry={nodes.Object_20.geometry}
                      material={materials.Cloth}
                      skeleton={nodes.Object_20.skeleton}
                    />
                    <skinnedMesh
                      name="Object_22"
                      geometry={nodes.Object_22.geometry}
                      material={materials.Pants}
                      skeleton={nodes.Object_22.skeleton}
                    />
                    <skinnedMesh
                      name="Object_24"
                      geometry={nodes.Object_24.geometry}
                      material={materials.Deco_Foot}
                      skeleton={nodes.Object_24.skeleton}
                    />
                    <skinnedMesh
                      name="Object_26"
                      geometry={nodes.Object_26.geometry}
                      material={materials.Cloak_Up}
                      skeleton={nodes.Object_26.skeleton}
                    />
                    <skinnedMesh
                      name="Object_28"
                      geometry={nodes.Object_28.geometry}
                      material={materials.Cloak}
                      skeleton={nodes.Object_28.skeleton}
                    />

                    <group name="stars">
                      <group
                        name="star_point"
                        position={[0, -3083.631, 0]}
                        scale={6}
                      >
                        <mesh
                          name="star_point_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point1"
                        position={[0, -2301.731, 2563.255]}
                        scale={6}
                      >
                        <mesh
                          name="star_point1_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point1_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point2"
                        position={[0, -3490.218, -1407.419]}
                        scale={6}
                      >
                        <mesh
                          name="star_point2_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point2_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point3"
                        position={[0, -1613.66, -2314.422]}
                        scale={6}
                      >
                        <mesh
                          name="star_point3_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point3_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point4"
                        position={[0, -1707.488, 1657.626]}
                        scale={6}
                      >
                        <mesh
                          name="star_point4_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point4_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point5"
                        position={[-2530.149, -2770.871, 751.138]}
                        scale={6}
                      >
                        <mesh
                          name="star_point5_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point5_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point6"
                        position={[1502.276, -3560.479, 1423.209]}
                        scale={6}
                      >
                        <mesh
                          name="star_point6_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point6_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point7"
                        position={[-20.262, -2583.872, -2720.584]}
                        scale={6}
                      >
                        <mesh
                          name="star_point7_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point7_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point8"
                        position={[0, -2153.604, 3170.545]}
                        scale={6}
                      >
                        <mesh
                          name="star_point8_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point8_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point9"
                        position={[3629.322, -2676.604, 0]}
                        scale={6}
                      >
                        <mesh
                          name="star_point9_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point9_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point10"
                        position={[-3018.782, -3253.225, 0]}
                        scale={6}
                      >
                        <mesh
                          name="star_point10_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point10_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point11"
                        position={[-3866.755, -2167.82, 0]}
                        scale={6}
                      >
                        <mesh
                          name="star_point11_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point11_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point12"
                        position={[1027.873, -3083.631, -2055.746]}
                        scale={6}
                      >
                        <mesh
                          name="star_point12_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point12_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point13"
                        position={[-995.57, -4259.792, -632.537]}
                        scale={6}
                      >
                        <mesh
                          name="star_point13_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point13_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point14"
                        position={[-1221.08, -2371.334, 0]}
                        scale={6}
                      >
                        <mesh
                          name="star_point14_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point14_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point15"
                        position={[0, -3083.631, 0]}
                        scale={6}
                      >
                        <mesh
                          name="star_point15_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point15_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point16"
                        position={[0, -3083.631, 0]}
                        scale={6}
                      >
                        <mesh
                          name="star_point16_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point16_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point17"
                        position={[0, -3083.631, 0]}
                        scale={6}
                      >
                        <mesh
                          name="star_point17_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point17_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point18"
                        position={[0, -3083.631, 0]}
                        scale={6}
                      >
                        <mesh
                          name="star_point18_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point18_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point19"
                        position={[0, -3083.631, 0]}
                        scale={6}
                      >
                        <mesh
                          name="star_point19_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point19_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                      <group
                        name="star_point20"
                        position={[0, -3083.631, 0]}
                        scale={6}
                      >
                        <mesh
                          name="star_point20_star_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.star_point20_star_0.geometry}
                          material={materials.star}
                        />
                      </group>
                    </group>
                    <group name="vfx_a">
                      <group
                        name="glow_vfx_point_0"
                        position={[-406.029, 147.694, -5.82]}
                        scale={2.377}
                      >
                        <mesh
                          name="glow_vfx_point_0_glow_stuff_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.glow_vfx_point_0_glow_stuff_0.geometry
                          }
                          material={materials.glow_stuff}
                        />
                      </group>
                      <group
                        name="glow_vfx_point_1"
                        position={[561.572, 171.684, -255.524]}
                        scale={1.794}
                      >
                        <mesh
                          name="glow_vfx_point_1_glow_stuff_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.glow_vfx_point_1_glow_stuff_0.geometry
                          }
                          material={materials.glow_stuff}
                        />
                      </group>
                      <group
                        name="glow_vfx_point_2"
                        position={[203.001, 172.083, 408.595]}
                        scale={0}
                      >
                        <mesh
                          name="glow_vfx_point_2_glow_stuff_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.glow_vfx_point_2_glow_stuff_0.geometry
                          }
                          material={materials.glow_stuff}
                        />
                      </group>
                      <group
                        name="glow_vfx_point_3"
                        position={[-594.567, 57.972, -461.007]}
                        scale={0}
                      >
                        <mesh
                          name="glow_vfx_point_3_glow_stuff_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.glow_vfx_point_3_glow_stuff_0.geometry
                          }
                          material={materials.glow_stuff}
                        />
                      </group>
                      <group
                        name="glow_vfx_point_4"
                        position={[-594.567, 57.972, -461.007]}
                        scale={0}
                      >
                        <mesh
                          name="glow_vfx_point_4_glow_stuff_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.glow_vfx_point_4_glow_stuff_0.geometry
                          }
                          material={materials.glow_stuff}
                        />
                      </group>
                    </group>
                    <group
                      name="vfx_b"
                      position={[-68, 0, 715.188]}
                      rotation={[-Math.PI, -0.67, -Math.PI]}
                    >
                      <group
                        name="glow_vfx_point_0_1"
                        position={[-406.029, 147.694, -5.82]}
                        scale={2.377}
                      >
                        <mesh
                          name="glow_vfx_point_0_glow_stuff_0_1"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.glow_vfx_point_0_glow_stuff_0_1.geometry
                          }
                          material={materials.glow_stuff}
                        />
                      </group>
                      <group
                        name="glow_vfx_point_1_1"
                        position={[566, 175.129, -255.388]}
                        scale={1.854}
                      >
                        <mesh
                          name="glow_vfx_point_1_glow_stuff_0_1"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.glow_vfx_point_1_glow_stuff_0_1.geometry
                          }
                          material={materials.glow_stuff}
                        />
                      </group>
                      <group
                        name="glow_vfx_point_2_1"
                        position={[196.381, 167.65, 408.415]}
                        scale={0}
                      >
                        <mesh
                          name="glow_vfx_point_2_glow_stuff_0_1"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.glow_vfx_point_2_glow_stuff_0_1.geometry
                          }
                          material={materials.glow_stuff}
                        />
                      </group>
                      <group
                        name="glow_vfx_point_3_1"
                        position={[-594.567, 57.972, -461.007]}
                        scale={0}
                      >
                        <mesh
                          name="glow_vfx_point_3_glow_stuff_0_1"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.glow_vfx_point_3_glow_stuff_0_1.geometry
                          }
                          material={materials.glow_stuff}
                        />
                      </group>
                      <group
                        name="glow_vfx_point_4_1"
                        position={[-594.567, 57.972, -461.007]}
                        scale={0}
                      >
                        <mesh
                          name="glow_vfx_point_4_glow_stuff_0_1"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.glow_vfx_point_4_glow_stuff_0_1.geometry
                          }
                          material={materials.glow_stuff}
                        />
                      </group>
                    </group>
                    <group
                      name="vfx_c"
                      position={[-1252.656, 0, -404.193]}
                      rotation={[-Math.PI, 0.757, -Math.PI]}
                    >
                      <group
                        name="glow_vfx_point_0_2"
                        position={[-406.029, 147.694, -5.82]}
                        scale={2.377}
                      >
                        <mesh
                          name="glow_vfx_point_0_glow_stuff_0_2"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.glow_vfx_point_0_glow_stuff_0_2.geometry
                          }
                          material={materials.glow_stuff}
                        />
                      </group>
                      <group
                        name="glow_vfx_point_1_2"
                        position={[566, 175.129, -255.388]}
                        scale={1.854}
                      >
                        <mesh
                          name="glow_vfx_point_1_glow_stuff_0_2"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.glow_vfx_point_1_glow_stuff_0_2.geometry
                          }
                          material={materials.glow_stuff}
                        />
                      </group>
                      <group
                        name="glow_vfx_point_2_2"
                        position={[196.381, 167.65, 408.415]}
                        scale={0}
                      >
                        <mesh
                          name="glow_vfx_point_2_glow_stuff_0_2"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.glow_vfx_point_2_glow_stuff_0_2.geometry
                          }
                          material={materials.glow_stuff}
                        />
                      </group>
                      <group
                        name="glow_vfx_point_3_2"
                        position={[-594.567, 57.972, -461.007]}
                        scale={0}
                      >
                        <mesh
                          name="glow_vfx_point_3_glow_stuff_0_2"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.glow_vfx_point_3_glow_stuff_0_2.geometry
                          }
                          material={materials.glow_stuff}
                        />
                      </group>
                      <group
                        name="glow_vfx_point_4_2"
                        position={[-594.567, 57.972, -461.007]}
                        scale={0}
                      >
                        <mesh
                          name="glow_vfx_point_4_glow_stuff_0_2"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.glow_vfx_point_4_glow_stuff_0_2.geometry
                          }
                          material={materials.glow_stuff}
                        />
                      </group>
                    </group>
                    <group
                      name="TheOne_Low"
                      position={[0.003, 306.536, -38.165]}
                      scale={150}
                    >
                      <group name="Head_low" />
                      <group name="Eyes_main_low" />
                      <group name="Eyes_threes_low" />
                      <group name="Body_low" />
                      <group name="Cloth_body_low" />
                      <group name="Cloth_deco_chain_low" />
                      <group name="Cloth_arms_low" />
                      <group name="Cloth_pants_low" />
                      <group name="Vervel_low" />
                      <group name="Cloak_cappa_low" />
                      <group name="Cloak_main_low" />
                    </group>
                    <group
                      name="Eneergy_Ball"
                      position={[63.685, 234.364, -20.66]}
                      scale={4.826}
                    >
                      <mesh
                        name="Eneergy_Ball_energy_ball_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Eneergy_Ball_energy_ball_0.geometry}
                        material={materials.energy_ball}
                      />
                    </group>
                    <group
                      name="wave_blink_group"
                      position={[-2.751, 297.887, 5.071]}
                      rotation={[0.105, 0, 0]}
                      scale={0}
                    >
                      <group
                        name="wave_blink_ring_0"
                        position={[-2.751, 297.887, 5.071]}
                        rotation={[0.105, 0, 0]}
                        scale={0}
                      >
                        <mesh
                          name="wave_blink_ring_0_energy_wave_blink_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.wave_blink_ring_0_energy_wave_blink_0.geometry
                          }
                          material={materials.energy_wave_blink}
                        />
                      </group>
                      <group
                        name="wave_blink_ring_1"
                        position={[-2.751, 297.887, 5.071]}
                        rotation={[0.105, 0, 0]}
                        scale={0}
                      >
                        <mesh
                          name="wave_blink_ring_1_energy_wave_blink_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.wave_blink_ring_1_energy_wave_blink_0.geometry
                          }
                          material={materials.energy_wave_blink}
                        />
                      </group>
                      <group
                        name="wave_blink_ring_2"
                        position={[-2.751, 297.887, 5.071]}
                        rotation={[0.105, 0, 0]}
                        scale={0}
                      >
                        <mesh
                          name="wave_blink_ring_2_energy_wave_blink_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.wave_blink_ring_2_energy_wave_blink_0.geometry
                          }
                          material={materials.energy_wave_blink}
                        />
                      </group>
                      <group
                        name="wave_blink_ring_3"
                        position={[-2.751, 297.887, 5.071]}
                        rotation={[0.105, 0, 0]}
                        scale={0}
                      >
                        <mesh
                          name="wave_blink_ring_3_energy_wave_blink_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.wave_blink_ring_3_energy_wave_blink_0.geometry
                          }
                          material={materials.energy_wave_blink}
                        />
                      </group>
                      <group
                        name="wave_blink_ring_4"
                        position={[-2.751, 297.887, 5.071]}
                        rotation={[0.105, 0, 0]}
                        scale={0}
                      >
                        <mesh
                          name="wave_blink_ring_4_energy_wave_blink_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.wave_blink_ring_4_energy_wave_blink_0.geometry
                          }
                          material={materials.energy_wave_blink}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Fish_poly">
              <group name="Fish_body" />
              <group name="Fish_eye" />
              <group name="Fish_tail_a" />
              <group name="Fish_tail_b" />
              <group name="Fish_tail_c" />
            </group>
            <group name="Fish_poly1">
              <group name="Fish_body_1" />
              <group name="Fish_eye_1" />
              <group name="Fish_tail_a_1" />
              <group name="Fish_tail_b_1" />
              <group name="Fish_tail_c_1" />
            </group>
            <group
              name="dragon"
              position={[0, 1150, -1200]}
              rotation={[0.052, 0, 0]}
            >
              <group
                name="main"
                position={[0, -10.621, 0]}
                rotation={[0.036, 0, 0]}
              >
                <group name="Dragon_eye" position={[0, 0, 0.298]}>
                  <mesh
                    name="Dragon_eye_dragon_eye_center_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Dragon_eye_dragon_eye_center_0.geometry}
                    material={materials.dragon_eye_center}
                  />
                </group>
                <group name="Dragon_head">
                  <mesh
                    name="Dragon_head_dragon_eye_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Dragon_head_dragon_eye_0.geometry}
                    material={materials.dragon_eye}
                  />
                </group>
                <group name="eye" position={[0, 0.405, -3.697]}>
                  <group name="Eye_ball_inner" position={[0, -1.715, 6.762]}>
                    <mesh
                      name="Eye_ball_inner_dragon_eye_ball_inner_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Eye_ball_inner_dragon_eye_ball_inner_0.geometry
                      }
                      material={materials.dragon_eye_ball_inner}
                    />
                  </group>
                  <group name="Eye_ball_out" position={[0, -1.715, 9.325]}>
                    <mesh
                      name="Eye_ball_out_dragon_eye_ball_out_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Eye_ball_out_dragon_eye_ball_out_0.geometry
                      }
                      material={materials.dragon_eye_ball_out}
                    />
                  </group>
                  <group name="core">
                    <group
                      name="Eyecore_a"
                      position={[1.088, -80.005, 327.558]}
                      rotation={[0, 0, 2.723]}
                    >
                      <mesh
                        name="Eyecore_a_dragon_eye_core_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Eyecore_a_dragon_eye_core_0.geometry}
                        material={materials.dragon_eye_core}
                      />
                    </group>
                    <group
                      name="Eyecore_b"
                      position={[1.088, -80.005, 316.751]}
                      rotation={[2.723, 0, 0]}
                    >
                      <mesh
                        name="Eyecore_b_dragon_eye_core_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Eyecore_b_dragon_eye_core_0.geometry}
                        material={materials.dragon_eye_core}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Fish_poly2">
              <group name="Fish_body_2" />
              <group name="Fish_eye_2" />
              <group name="Fish_tail_a_2" />
              <group name="Fish_tail_b_2" />
              <group name="Fish_tail_c_2" />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default God;
useGLTF.preload("/models/god.glb");
