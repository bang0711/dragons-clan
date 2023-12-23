import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    pCube11_rocks1_0: THREE.Mesh;
    pCube12_rocks1_0: THREE.Mesh;
    pCube13_rocks1_0: THREE.Mesh;
    pCube14_rocks1_0: THREE.Mesh;
    pCube15_rocks1_0: THREE.Mesh;
    pCube16_rocks1_0: THREE.Mesh;
    pCube17_rocks1_0: THREE.Mesh;
    pCube18_rocks1_0: THREE.Mesh;
    pCylinder11_floor_0: THREE.Mesh;
    polySurface12_home_body_0: THREE.Mesh;
    polySurface1336_wood_0: THREE.Mesh;
    polySurface1467_wood_0: THREE.Mesh;
    pCylinder21_totem_0: THREE.Mesh;
    pCube27_totem_0: THREE.Mesh;
    pCube27_phongE1_0: THREE.Mesh;
    pSphere1_ground_0: THREE.Mesh;
    polySurface16_roof1_0: THREE.Mesh;
    polySurface16_windows_background_0: THREE.Mesh;
    polySurface16_roof3_0: THREE.Mesh;
    polySurface17_windows_frame_0: THREE.Mesh;
    polySurface13_windows_frame_0: THREE.Mesh;
    polySurface14_wood2_0: THREE.Mesh;
    polySurface727_wood2_0: THREE.Mesh;
    polySurface725_totem_0: THREE.Mesh;
    pCylinder25_roof2_0: THREE.Mesh;
    polySurface944_tree_body_0: THREE.Mesh;
    polySurface945_tree1_0: THREE.Mesh;
    polySurface946_tree2_0: THREE.Mesh;
    polySurface947_tree1_0: THREE.Mesh;
    polySurface948_tree_body_0: THREE.Mesh;
    polySurface949_tree_body_0: THREE.Mesh;
    polySurface986_tree_body_0: THREE.Mesh;
    polySurface987_tree1_0: THREE.Mesh;
    polySurface988_tree2_0: THREE.Mesh;
    polySurface989_tree2_0: THREE.Mesh;
    polySurface990_tree_body_0: THREE.Mesh;
    polySurface991_tree_body_0: THREE.Mesh;
    polySurface962_tree_body_0: THREE.Mesh;
    polySurface963_tree1_0: THREE.Mesh;
    polySurface964_tree2_0: THREE.Mesh;
    polySurface965_tree1_0: THREE.Mesh;
    polySurface966_tree_body_0: THREE.Mesh;
    polySurface967_tree_body_0: THREE.Mesh;
    polySurface956_tree_body_0: THREE.Mesh;
    polySurface957_tree1_0: THREE.Mesh;
    polySurface958_tree2_0: THREE.Mesh;
    polySurface959_tree1_0: THREE.Mesh;
    polySurface960_tree_body_0: THREE.Mesh;
    polySurface961_tree_body_0: THREE.Mesh;
    polySurface950_tree_body_0: THREE.Mesh;
    polySurface951_tree2_0: THREE.Mesh;
    polySurface952_tree2_0: THREE.Mesh;
    polySurface953_tree1_0: THREE.Mesh;
    polySurface954_tree_body_0: THREE.Mesh;
    polySurface955_tree_body_0: THREE.Mesh;
    polySurface968_tree_body_0: THREE.Mesh;
    polySurface969_tree1_0: THREE.Mesh;
    polySurface970_tree1_0: THREE.Mesh;
    polySurface971_tree2_0: THREE.Mesh;
    polySurface972_tree_body_0: THREE.Mesh;
    polySurface973_tree_body_0: THREE.Mesh;
    pCube51_rocks1_0: THREE.Mesh;
    pCube55_rocks1_0: THREE.Mesh;
    pCube56_rocks1_0: THREE.Mesh;
    pCube57_rocks1_0: THREE.Mesh;
    pCube58_rocks1_0: THREE.Mesh;
    polySurface38_wood_0: THREE.Mesh;
    polySurface135_totem_0: THREE.Mesh;
    pCylinder92_wood_0: THREE.Mesh;
    polySurface1311_wood2_0: THREE.Mesh;
    polySurface1313_wood2_0: THREE.Mesh;
    polySurface1314_wood2_0: THREE.Mesh;
    polySurface1315_wood2_0: THREE.Mesh;
    polySurface1316_wood2_0: THREE.Mesh;
    polySurface1317_wood2_0: THREE.Mesh;
    polySurface310_wood2_0: THREE.Mesh;
    polySurface311_wood2_0: THREE.Mesh;
    polySurface312_wood2_0: THREE.Mesh;
    polySurface313_windows_frame_0: THREE.Mesh;
    polySurface313_windows_background_0: THREE.Mesh;
    polySurface314_windows_frame_0: THREE.Mesh;
    polySurface315_windows_frame_0: THREE.Mesh;
    polySurface337_roof1_0: THREE.Mesh;
    polySurface337_roof3_0: THREE.Mesh;
    polySurface338_totem2_0: THREE.Mesh;
    polySurface339_roof1_0: THREE.Mesh;
    polySurface342_roof3_0: THREE.Mesh;
    polySurface342_roof1_0: THREE.Mesh;
    polySurface343_wood2_0: THREE.Mesh;
    polySurface345_home_body_0: THREE.Mesh;
    polySurface345_tree_body_0: THREE.Mesh;
    polySurface826_windows_frame_0: THREE.Mesh;
    polySurface827_windows_frame_0: THREE.Mesh;
    polySurface828_wood2_0: THREE.Mesh;
    polySurface828_windows_background_0: THREE.Mesh;
    polySurface829_windows_frame_0: THREE.Mesh;
    polySurface830_windows_frame_0: THREE.Mesh;
    polySurface831_roof1_0: THREE.Mesh;
    polySurface831_roof3_0: THREE.Mesh;
    polySurface832_totem2_0: THREE.Mesh;
    polySurface837_wood2_0: THREE.Mesh;
    polySurface838_roof3_0: THREE.Mesh;
    polySurface838_roof1_0: THREE.Mesh;
    polySurface840_home_body_0: THREE.Mesh;
    polySurface841_roof1_0: THREE.Mesh;
    polySurface846_windows_frame_0: THREE.Mesh;
    polySurface304_windows_frame_0: THREE.Mesh;
    polySurface304_windows_background_0: THREE.Mesh;
    polySurface304_wood2_0: THREE.Mesh;
    polySurface488_wood2_0: THREE.Mesh;
    polySurface491_wood2_0: THREE.Mesh;
    polySurface492_wood2_0: THREE.Mesh;
    polySurface493_wood2_0: THREE.Mesh;
    polySurface494_wood2_0: THREE.Mesh;
    polySurface495_wood2_0: THREE.Mesh;
    polySurface1133_wood2_0: THREE.Mesh;
    polySurface374_wood2_0: THREE.Mesh;
    polySurface394_wood2_0: THREE.Mesh;
    polySurface395_wood2_0: THREE.Mesh;
    polySurface396_wood2_0: THREE.Mesh;
    polySurface397_wood2_0: THREE.Mesh;
    polySurface398_wood2_0: THREE.Mesh;
    polySurface399_wood2_0: THREE.Mesh;
    polySurface400_wood2_0: THREE.Mesh;
    polySurface401_wood2_0: THREE.Mesh;
    polySurface402_wood2_0: THREE.Mesh;
    polySurface403_wood2_0: THREE.Mesh;
    polySurface404_wood2_0: THREE.Mesh;
    polySurface405_wood2_0: THREE.Mesh;
    polySurface406_wood2_0: THREE.Mesh;
    polySurface407_wood2_0: THREE.Mesh;
    polySurface408_wood2_0: THREE.Mesh;
    polySurface409_wood2_0: THREE.Mesh;
    polySurface410_wood2_0: THREE.Mesh;
    polySurface411_wood2_0: THREE.Mesh;
    polySurface412_wood2_0: THREE.Mesh;
    polySurface413_wood2_0: THREE.Mesh;
    polySurface414_wood2_0: THREE.Mesh;
    polySurface415_wood2_0: THREE.Mesh;
    polySurface416_wood2_0: THREE.Mesh;
    polySurface417_wood2_0: THREE.Mesh;
    polySurface418_wood2_0: THREE.Mesh;
    polySurface419_wood2_0: THREE.Mesh;
    polySurface420_wood2_0: THREE.Mesh;
    polySurface421_wood2_0: THREE.Mesh;
    polySurface422_wood2_0: THREE.Mesh;
    polySurface423_wood2_0: THREE.Mesh;
    polySurface424_wood2_0: THREE.Mesh;
    polySurface425_wood2_0: THREE.Mesh;
    polySurface426_wood2_0: THREE.Mesh;
    polySurface427_wood2_0: THREE.Mesh;
    polySurface428_wood2_0: THREE.Mesh;
    polySurface429_wood2_0: THREE.Mesh;
    polySurface497_wood2_0: THREE.Mesh;
    polySurface1380_windows_frame_0: THREE.Mesh;
    polySurface1380_totem_0: THREE.Mesh;
    polySurface1380_windows_background_0: THREE.Mesh;
    polySurface1381_wood2_0: THREE.Mesh;
    polySurface1382_wood2_0: THREE.Mesh;
    polySurface1383_totem_0: THREE.Mesh;
    pCube106_roof3_0: THREE.Mesh;
    pCube107_roof3_0: THREE.Mesh;
    pCube108_roof3_0: THREE.Mesh;
    pCube109_roof3_0: THREE.Mesh;
    polySurface1325_totem_0: THREE.Mesh;
    polySurface1326_wood_0: THREE.Mesh;
    polySurface1327_totem_0: THREE.Mesh;
    polySurface1328_wood2_0: THREE.Mesh;
    polySurface1330_wood2_0: THREE.Mesh;
    polySurface1331_wood2_0: THREE.Mesh;
    polySurface1332_wood2_0: THREE.Mesh;
    polySurface1333_wood2_0: THREE.Mesh;
    polySurface1334_wood2_0: THREE.Mesh;
    polySurface1335_wood2_0: THREE.Mesh;
    pCube113_roof3_0: THREE.Mesh;
    pCube114_roof3_0: THREE.Mesh;
    pCube115_roof3_0: THREE.Mesh;
    polySurface437_wood_0: THREE.Mesh;
    polySurface980_tree_body_0: THREE.Mesh;
    polySurface981_tree2_0: THREE.Mesh;
    polySurface982_tree1_0: THREE.Mesh;
    polySurface983_tree2_0: THREE.Mesh;
    polySurface984_tree_body_0: THREE.Mesh;
    polySurface985_tree_body_0: THREE.Mesh;
    pCylinder101_roof3_0: THREE.Mesh;
    pCylinder101_roof1_0: THREE.Mesh;
    polySurface11_roof3_0: THREE.Mesh;
    polySurface11_roof1_0: THREE.Mesh;
    polySurface476_rocks_0: THREE.Mesh;
    polySurface477_rocks_0: THREE.Mesh;
    polySurface478_rocks_0: THREE.Mesh;
    polySurface483_totem2_0: THREE.Mesh;
    polySurface496_totem2_0: THREE.Mesh;
    polySurface823_totem2_0: THREE.Mesh;
    pCylinder122_wood_0: THREE.Mesh;
    polySurface487_totem_0: THREE.Mesh;
    polySurface469_wood_0: THREE.Mesh;
    polySurface340_wood2_0: THREE.Mesh;
    pCube194_rocks1_0: THREE.Mesh;
    polySurface1034_tree1_0: THREE.Mesh;
    polySurface1035_tree2_0: THREE.Mesh;
    polySurface1036_tree1_0: THREE.Mesh;
    polySurface1037_tree_body_0: THREE.Mesh;
    polySurface1038_tree_body_0: THREE.Mesh;
    polySurface1039_tree_body_0: THREE.Mesh;
    polySurface1028_tree2_0: THREE.Mesh;
    polySurface1029_tree1_0: THREE.Mesh;
    polySurface1030_tree1_0: THREE.Mesh;
    polySurface1031_tree_body_0: THREE.Mesh;
    polySurface1032_tree_body_0: THREE.Mesh;
    polySurface1033_tree_body_0: THREE.Mesh;
    polySurface1004_tree2_0: THREE.Mesh;
    polySurface1005_tree1_0: THREE.Mesh;
    polySurface1006_tree1_0: THREE.Mesh;
    polySurface1007_tree_body_0: THREE.Mesh;
    polySurface1008_tree_body_0: THREE.Mesh;
    polySurface1009_tree_body_0: THREE.Mesh;
    polySurface1040_tree1_0: THREE.Mesh;
    polySurface1041_tree1_0: THREE.Mesh;
    polySurface1042_tree1_0: THREE.Mesh;
    polySurface1043_tree_body_0: THREE.Mesh;
    polySurface1044_tree_body_0: THREE.Mesh;
    polySurface1045_tree_body_0: THREE.Mesh;
    polySurface1022_tree2_0: THREE.Mesh;
    polySurface1023_tree1_0: THREE.Mesh;
    polySurface1024_tree_body_0: THREE.Mesh;
    polySurface1025_tree1_0: THREE.Mesh;
    polySurface1026_tree_body_0: THREE.Mesh;
    polySurface1027_tree_body_0: THREE.Mesh;
    pCube195_rocks1_0: THREE.Mesh;
    pCube196_rocks1_0: THREE.Mesh;
    pCube197_rocks1_0: THREE.Mesh;
    polySurface900_home_body_0: THREE.Mesh;
    polySurface922_wood2_0: THREE.Mesh;
    polySurface923_wood2_0: THREE.Mesh;
    polySurface1090_roof3_0: THREE.Mesh;
    polySurface1091_roof3_0: THREE.Mesh;
    polySurface1092_roof3_0: THREE.Mesh;
    polySurface1093_roof3_0: THREE.Mesh;
    polySurface1094_roof3_0: THREE.Mesh;
    polySurface1095_wood2_0: THREE.Mesh;
    polySurface1096_wood2_0: THREE.Mesh;
    polySurface1097_wood2_0: THREE.Mesh;
    polySurface1098_wood2_0: THREE.Mesh;
    polySurface1099_wood2_0: THREE.Mesh;
    polySurface1100_wood2_0: THREE.Mesh;
    polySurface1101_totem_0: THREE.Mesh;
    polySurface1102_totem_0: THREE.Mesh;
    polySurface1103_totem_0: THREE.Mesh;
    polySurface1104_wood2_0: THREE.Mesh;
    polySurface1106_wood_0: THREE.Mesh;
    polySurface1107_totem_0: THREE.Mesh;
    polySurface1107_phongE1_0: THREE.Mesh;
    polySurface1108_totem_0: THREE.Mesh;
    polySurface1108_phongE1_0: THREE.Mesh;
    polySurface1119_totem_0: THREE.Mesh;
    polySurface1120_totem_0: THREE.Mesh;
    polySurface1121_roof1_0: THREE.Mesh;
    polySurface1121_roof3_0: THREE.Mesh;
    polySurface1122_home_body_0: THREE.Mesh;
    polySurface998_tree1_0: THREE.Mesh;
    polySurface999_tree1_0: THREE.Mesh;
    polySurface1000_tree2_0: THREE.Mesh;
    polySurface1001_lambert2_0: THREE.Mesh;
    polySurface1002_lambert2_0: THREE.Mesh;
    polySurface1003_tree_body_0: THREE.Mesh;
    polySurface1208_floor2_0: THREE.Mesh;
    polySurface1209_ground_0: THREE.Mesh;
    polySurface220_windows_frame_0: THREE.Mesh;
    pCube205_roof2_0: THREE.Mesh;
    pCylinder139_fox_readyfox_body_0: THREE.Mesh;
    pCylinder139_fox_readyfox_white_0: THREE.Mesh;
    pCylinder139_fox_readyfox_black_0: THREE.Mesh;
    pCylinder141_fox_readyfox_body_0: THREE.Mesh;
    pCylinder141_fox_readyfox_white_0: THREE.Mesh;
    pCylinder141_fox_readyfox_black_0: THREE.Mesh;
    pCylinder142_fox_readyfox_body_0: THREE.Mesh;
    pCylinder142_fox_readyfox_white_0: THREE.Mesh;
    pCylinder142_fox_readyfox_black_0: THREE.Mesh;
    polySurface1150_tree1_0: THREE.Mesh;
    polySurface1151_tree2_0: THREE.Mesh;
    polySurface1152_tree2_0: THREE.Mesh;
    polySurface1153_roof1_0: THREE.Mesh;
    polySurface1138_tree1_0: THREE.Mesh;
    polySurface1139_tree1_0: THREE.Mesh;
    polySurface1140_tree1_0: THREE.Mesh;
    polySurface1141_roof1_0: THREE.Mesh;
    polySurface1158_tree1_0: THREE.Mesh;
    polySurface1159_tree1_0: THREE.Mesh;
    polySurface1160_tree1_0: THREE.Mesh;
    polySurface1161_roof1_0: THREE.Mesh;
    polySurface1134_tree1_0: THREE.Mesh;
    polySurface1135_tree1_0: THREE.Mesh;
    polySurface1136_tree1_0: THREE.Mesh;
    polySurface1137_roof1_0: THREE.Mesh;
    polySurface1154_tree1_0: THREE.Mesh;
    polySurface1155_tree1_0: THREE.Mesh;
    polySurface1156_tree1_0: THREE.Mesh;
    polySurface1157_roof1_0: THREE.Mesh;
    pCube209_rocks2_0: THREE.Mesh;
    pCylinder149_leika2_0: THREE.Mesh;
    polySurface1210_shovel2_0: THREE.Mesh;
    polySurface1211_wood2_0: THREE.Mesh;
    polySurface1212_shovel2_0: THREE.Mesh;
    polySurface1213_shovel2_0: THREE.Mesh;
    polySurface1142_tree1_0: THREE.Mesh;
    polySurface1143_tree1_0: THREE.Mesh;
    polySurface1144_tree1_0: THREE.Mesh;
    polySurface1145_roof1_0: THREE.Mesh;
    polySurface1146_tree1_0: THREE.Mesh;
    polySurface1147_tree1_0: THREE.Mesh;
    polySurface1148_tree1_0: THREE.Mesh;
    polySurface1149_roof1_0: THREE.Mesh;
    polySurface1162_tree1_0: THREE.Mesh;
    polySurface1163_tree1_0: THREE.Mesh;
    polySurface1164_tree1_0: THREE.Mesh;
    polySurface1165_roof1_0: THREE.Mesh;
    polySurface898_windows_frame_0: THREE.Mesh;
    polySurface924_tree_body_0: THREE.Mesh;
    polySurface925_tree2_0: THREE.Mesh;
    polySurface926_tree2_0: THREE.Mesh;
    polySurface927_tree1_0: THREE.Mesh;
    polySurface928_tree_body_0: THREE.Mesh;
    polySurface929_tree_body_0: THREE.Mesh;
    polySurface930_tree2_0: THREE.Mesh;
    polySurface931_tree1_0: THREE.Mesh;
    polySurface932_tree1_0: THREE.Mesh;
    polySurface933_tree_body_0: THREE.Mesh;
    polySurface934_tree_body_0: THREE.Mesh;
    polySurface935_tree_body_0: THREE.Mesh;
    polySurface936_tree2_0: THREE.Mesh;
    polySurface937_tree1_0: THREE.Mesh;
    polySurface938_tree2_0: THREE.Mesh;
    polySurface939_tree_body_0: THREE.Mesh;
    polySurface940_tree_body_0: THREE.Mesh;
    polySurface941_tree_body_0: THREE.Mesh;
    polySurface943_totem_0: THREE.Mesh;
    polySurface992_tree_body_0: THREE.Mesh;
    polySurface993_tree2_0: THREE.Mesh;
    polySurface994_tree1_0: THREE.Mesh;
    polySurface995_tree1_0: THREE.Mesh;
    polySurface996_tree_body_0: THREE.Mesh;
    polySurface997_tree_body_0: THREE.Mesh;
    polySurface1054_tree1_0: THREE.Mesh;
    polySurface1054_tree2_0: THREE.Mesh;
    polySurface1054_tree_body_0: THREE.Mesh;
    polySurface875_rocks_0: THREE.Mesh;
    polySurface1168_fox_readyfox_body_0: THREE.Mesh;
    polySurface1168_fox_readyfox_white_0: THREE.Mesh;
    polySurface1168_fox_readyfox_black_0: THREE.Mesh;
    polySurface1169_fox_readyfox_body_0: THREE.Mesh;
    polySurface1169_fox_readyfox_white_0: THREE.Mesh;
    polySurface1169_fox_readyfox_black_0: THREE.Mesh;
    polySurface1188_floor2_0: THREE.Mesh;
    polySurface1189_ground_0: THREE.Mesh;
    polySurface1166_tree1_0: THREE.Mesh;
    polySurface1166_tree2_0: THREE.Mesh;
    polySurface1166_tree_body_0: THREE.Mesh;
    polySurface1167_windows_frame_0: THREE.Mesh;
    pCylinder159_roof2_0: THREE.Mesh;
    polySurface1125_roof3_0: THREE.Mesh;
    polySurface1125_phongE1_0: THREE.Mesh;
    polySurface1125_totem_0: THREE.Mesh;
    polySurface1125_roof1_0: THREE.Mesh;
    polySurface1125_totem2_0: THREE.Mesh;
    polySurface1214_roof3_0: THREE.Mesh;
    polySurface1214_phongE1_0: THREE.Mesh;
    polySurface1214_totem_0: THREE.Mesh;
    polySurface1214_roof1_0: THREE.Mesh;
    polySurface1214_totem2_0: THREE.Mesh;
    polySurface319_wood_0: THREE.Mesh;
    polySurface1377_windows_frame_0: THREE.Mesh;
    polySurface1377_windows_background_0: THREE.Mesh;
    polySurface1378_wood2_0: THREE.Mesh;
    polySurface1379_wood2_0: THREE.Mesh;
    polySurface1246_wood_0: THREE.Mesh;
    polySurface1248_wood_0: THREE.Mesh;
    polySurface1249_wood_0: THREE.Mesh;
    polySurface1250_wood_0: THREE.Mesh;
    polySurface1251_wood_0: THREE.Mesh;
    polySurface1344_wood_0: THREE.Mesh;
    polySurface1345_wood_0: THREE.Mesh;
    polySurface1349_wood_0: THREE.Mesh;
    polySurface1350_wood_0: THREE.Mesh;
    polySurface1351_wood_0: THREE.Mesh;
    polySurface1352_wood_0: THREE.Mesh;
    polySurface1353_wood_0: THREE.Mesh;
    polySurface1354_wood_0: THREE.Mesh;
    polySurface1355_wood_0: THREE.Mesh;
    polySurface1356_wood_0: THREE.Mesh;
    polySurface1357_wood_0: THREE.Mesh;
    polySurface1358_wood_0: THREE.Mesh;
    polySurface1359_wood_0: THREE.Mesh;
    polySurface1360_wood_0: THREE.Mesh;
    polySurface1361_wood_0: THREE.Mesh;
    polySurface1362_wood_0: THREE.Mesh;
    polySurface1363_wood_0: THREE.Mesh;
    polySurface1364_wood_0: THREE.Mesh;
    polySurface1365_wood_0: THREE.Mesh;
    polySurface1366_wood_0: THREE.Mesh;
    polySurface1367_wood_0: THREE.Mesh;
    polySurface1368_wood_0: THREE.Mesh;
    polySurface1369_wood_0: THREE.Mesh;
    polySurface1370_wood_0: THREE.Mesh;
    polySurface1371_wood_0: THREE.Mesh;
    polySurface1372_wood_0: THREE.Mesh;
    polySurface1373_wood_0: THREE.Mesh;
    polySurface850_wood2_0: THREE.Mesh;
    polySurface1522_floor2_0: THREE.Mesh;
    polySurface1523_ground_0: THREE.Mesh;
    polySurface975_tree2_0: THREE.Mesh;
    polySurface975_tree1_0: THREE.Mesh;
    polySurface975_tree_body_0: THREE.Mesh;
    polySurface857_wood_0: THREE.Mesh;
    polySurface860_wood_0: THREE.Mesh;
    polySurface1310_totem_0: THREE.Mesh;
    pCube213_roof2_0: THREE.Mesh;
    polySurface1318_windows_frame_0: THREE.Mesh;
    polySurface1374_windows_frame_0: THREE.Mesh;
    polySurface1374_windows_background_0: THREE.Mesh;
    polySurface1375_wood2_0: THREE.Mesh;
    polySurface1376_wood2_0: THREE.Mesh;
    polySurface1080_wood_0: THREE.Mesh;
    polySurface1080_totem_0: THREE.Mesh;
    polySurface1244_wood2_0: THREE.Mesh;
    polySurface1074_wood2_0: THREE.Mesh;
    polySurface1337_wood2_0: THREE.Mesh;
    polySurface1338_wood2_0: THREE.Mesh;
    polySurface1339_windows_frame_0: THREE.Mesh;
    polySurface1339_windows_background_0: THREE.Mesh;
    polySurface1340_windows_frame_0: THREE.Mesh;
    polySurface1340_windows_background_0: THREE.Mesh;
    polySurface1340_wood2_0: THREE.Mesh;
    polySurface1341_windows_frame_0: THREE.Mesh;
    polySurface1341_windows_background_0: THREE.Mesh;
    polySurface1341_wood2_0: THREE.Mesh;
    polySurface1342_windows_frame_0: THREE.Mesh;
    polySurface1342_windows_background_0: THREE.Mesh;
    polySurface1342_wood2_0: THREE.Mesh;
    polySurface1343_windows_frame_0: THREE.Mesh;
    polySurface1343_windows_background_0: THREE.Mesh;
    polySurface1343_wood2_0: THREE.Mesh;
    pCylinder160_rocks2_0: THREE.Mesh;
    polySurface1422_tree_body_0: THREE.Mesh;
    polySurface1423_tree_body_0: THREE.Mesh;
    polySurface1424_tree_body_0: THREE.Mesh;
    polySurface1425_tree2_0: THREE.Mesh;
    polySurface1426_tree1_0: THREE.Mesh;
    polySurface1427_tree2_0: THREE.Mesh;
    polySurface1428_rocks1_0: THREE.Mesh;
    polySurface1429_rocks1_0: THREE.Mesh;
    polySurface1430_tree_body_0: THREE.Mesh;
    polySurface1431_tree_body_0: THREE.Mesh;
    polySurface1432_tree2_0: THREE.Mesh;
    polySurface1433_tree1_0: THREE.Mesh;
    polySurface1434_tree1_0: THREE.Mesh;
    polySurface1435_tree_body_0: THREE.Mesh;
    polySurface1437_tree1_0: THREE.Mesh;
    polySurface1438_tree_body_0: THREE.Mesh;
    polySurface1439_tree1_0: THREE.Mesh;
    polySurface1440_tree_body_0: THREE.Mesh;
    polySurface1441_tree_body_0: THREE.Mesh;
    polySurface1442_tree2_0: THREE.Mesh;
    polySurface1443_tree1_0: THREE.Mesh;
    polySurface1444_tree_body_0: THREE.Mesh;
    polySurface1445_tree_body_0: THREE.Mesh;
    polySurface1446_tree2_0: THREE.Mesh;
    polySurface1447_tree2_0: THREE.Mesh;
    polySurface1448_tree1_0: THREE.Mesh;
    polySurface1449_tree_body_0: THREE.Mesh;
    polySurface1450_tree_body_0: THREE.Mesh;
    polySurface1451_tree_body_0: THREE.Mesh;
    polySurface1452_tree2_0: THREE.Mesh;
    polySurface1453_tree_body_0: THREE.Mesh;
    polySurface1454_tree1_0: THREE.Mesh;
    polySurface1455_tree1_0: THREE.Mesh;
    polySurface1456_lambert2_0: THREE.Mesh;
    polySurface1457_lambert2_0: THREE.Mesh;
    polySurface1458_tree_body_0: THREE.Mesh;
    polySurface1459_tree2_0: THREE.Mesh;
    polySurface1460_tree1_0: THREE.Mesh;
    polySurface1461_tree1_0: THREE.Mesh;
    polySurface1462_rocks1_0: THREE.Mesh;
    polySurface1463_rocks1_0: THREE.Mesh;
    polySurface1464_rocks1_0: THREE.Mesh;
    polySurface1465_rocks1_0: THREE.Mesh;
    polySurface1466_rocks1_0: THREE.Mesh;
    polySurface1491_wood2_0: THREE.Mesh;
    polySurface1491_shovel2_0: THREE.Mesh;
    polySurface1491_wood_0: THREE.Mesh;
    polySurface1491_totem_0: THREE.Mesh;
    polySurface1489_wood_0: THREE.Mesh;
    polySurface1489_totem_0: THREE.Mesh;
    pCube223_phongE1_0: THREE.Mesh;
    pCube224_phongE1_0: THREE.Mesh;
    pCube225_phongE1_0: THREE.Mesh;
    pCone10_phongE1_0: THREE.Mesh;
    pCube245_rocks1_0: THREE.Mesh;
    pCube246_rocks1_0: THREE.Mesh;
    polySurface1525_rocks2_0: THREE.Mesh;
    polySurface1526_rocks2_0: THREE.Mesh;
    polySurface1531_wood2_0: THREE.Mesh;
    polySurface1532_shovel2_0: THREE.Mesh;
    polySurface1533_shovel2_0: THREE.Mesh;
    polySurface1534_wood_0: THREE.Mesh;
    polySurface1535_bricks_2_0: THREE.Mesh;
    polySurface1536_shovel2_0: THREE.Mesh;
    polySurface1537_shovel2_0: THREE.Mesh;
    polySurface1538_wood_0: THREE.Mesh;
    polySurface1539_wood_0: THREE.Mesh;
    polySurface1540_wood2_0: THREE.Mesh;
    polySurface1541_rocks2_0: THREE.Mesh;
    polySurface1541_water_0: THREE.Mesh;
    polySurface1542_wood2_0: THREE.Mesh;
    polySurface1543_wood2_0: THREE.Mesh;
    polySurface1544_wood2_0: THREE.Mesh;
    polySurface1545_wood_0: THREE.Mesh;
    polySurface1547_wood2_0: THREE.Mesh;
    polySurface1547_wood_0: THREE.Mesh;
    polySurface1547_water_0: THREE.Mesh;
    pCylinder183_fox_readyfox_body_0: THREE.Mesh;
    pCylinder183_fox_readyfox_white_0: THREE.Mesh;
    pCylinder183_fox_readyfox_black_0: THREE.Mesh;
    pCylinder185_fox_readyfox_body_0: THREE.Mesh;
    pCylinder185_fox_readyfox_white_0: THREE.Mesh;
    pCylinder185_fox_readyfox_black_0: THREE.Mesh;
    pCylinder186_fox_readyfox_body_0: THREE.Mesh;
    pCylinder186_fox_readyfox_white_0: THREE.Mesh;
    pCylinder186_fox_readyfox_black_0: THREE.Mesh;
    pCube247_rocks1_0: THREE.Mesh;
    pCube248_rocks1_0: THREE.Mesh;
    pCube252_rocks1_0: THREE.Mesh;
  };
  materials: {
    rocks1: THREE.MeshStandardMaterial;
    floor: THREE.MeshStandardMaterial;
    home_body: THREE.MeshStandardMaterial;
    wood: THREE.MeshStandardMaterial;
    totem: THREE.MeshStandardMaterial;
    phongE1: THREE.MeshStandardMaterial;
    ground: THREE.MeshStandardMaterial;
    roof1: THREE.MeshStandardMaterial;
    windows_background: THREE.MeshStandardMaterial;
    roof3: THREE.MeshStandardMaterial;
    windows_frame: THREE.MeshStandardMaterial;
    wood2: THREE.MeshStandardMaterial;
    roof2: THREE.MeshStandardMaterial;
    tree_body: THREE.MeshStandardMaterial;
    tree1: THREE.MeshStandardMaterial;
    tree2: THREE.MeshStandardMaterial;
    totem2: THREE.MeshStandardMaterial;
    rocks: THREE.MeshStandardMaterial;
    lambert2: THREE.MeshStandardMaterial;
    floor2: THREE.MeshStandardMaterial;
    fox_readyfox_body: THREE.MeshStandardMaterial;
    fox_readyfox_white: THREE.MeshStandardMaterial;
    fox_readyfox_black: THREE.MeshStandardMaterial;
    rocks2: THREE.MeshStandardMaterial;
    leika2: THREE.MeshStandardMaterial;
    shovel2: THREE.MeshStandardMaterial;
    bricks_2: THREE.MeshStandardMaterial;
    water: THREE.MeshStandardMaterial;
  };
};

export function Island(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/island.glb") as GLTFResult;
  return (
    <group scale={3} {...props}>
      <group position={[-1.5, 2.2, 1.1]} scale={[1.5, 1.2, 1.5]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface12_home_body_0.geometry}
          material={materials.home_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1336_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1467_wood_0.geometry}
          material={materials.wood}
        />
      </group>
      <group
        position={[-0.7, 13.6, 2.3]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.3, 3.3, 4.9]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface16_roof1_0.geometry}
          material={materials.roof1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface16_windows_background_0.geometry}
          material={materials.windows_background}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface16_roof3_0.geometry}
          material={materials.roof3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface17_windows_frame_0.geometry}
          material={materials.windows_frame}
        />
      </group>
      <group position={[-0.7, 10.9, 4.7]} scale={[2, 2.3, 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface13_windows_frame_0.geometry}
          material={materials.windows_frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface14_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface727_wood2_0.geometry}
          material={materials.wood2}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface725_totem_0.geometry}
        material={materials.totem}
        position={[7.9, 2.9, -1.3]}
        scale={[0.7, 5, 4.2]}
      />
      <group position={[5.9, 0, -3.9]} rotation={[0, -0.9, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface944_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface945_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface946_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface947_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface948_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface949_tree_body_0.geometry}
          material={materials.tree_body}
        />
      </group>
      <group
        position={[1.6, -0.8, 32.9]}
        rotation={[-Math.PI, 0.5, -Math.PI]}
        scale={0.6}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface986_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface987_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface988_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface989_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface990_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface991_tree_body_0.geometry}
          material={materials.tree_body}
        />
      </group>
      <group
        position={[20.6, -1.2, 22.8]}
        rotation={[-Math.PI, -0.3, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface962_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface963_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface964_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface965_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface966_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface967_tree_body_0.geometry}
          material={materials.tree_body}
        />
      </group>
      <group position={[-17.3, -0.8, 18.1]} rotation={[0, 0.4, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface956_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface957_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface958_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface959_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface960_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface961_tree_body_0.geometry}
          material={materials.tree_body}
        />
      </group>
      <group
        position={[30.8, -0.8, 27.7]}
        rotation={[-Math.PI, -0.4, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface950_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface951_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface952_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface953_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface954_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface955_tree_body_0.geometry}
          material={materials.tree_body}
        />
      </group>
      <group
        position={[17.5, -0.6, 19.4]}
        rotation={[-Math.PI, -0.3, -Math.PI]}
        scale={0.7}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface968_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface969_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface970_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface971_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface972_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface973_tree_body_0.geometry}
          material={materials.tree_body}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface135_totem_0.geometry}
        material={materials.totem}
        position={[1.8, -0.1, 0.7]}
        scale={1.1}
      />
      <group position={[-7.6, 0, -3.3]} rotation={[0, 0.4, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface826_windows_frame_0.geometry}
          material={materials.windows_frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface827_windows_frame_0.geometry}
          material={materials.windows_frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface828_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface828_windows_background_0.geometry}
          material={materials.windows_background}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface829_windows_frame_0.geometry}
          material={materials.windows_frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface830_windows_frame_0.geometry}
          material={materials.windows_frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface831_roof1_0.geometry}
          material={materials.roof1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface831_roof3_0.geometry}
          material={materials.roof3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface832_totem2_0.geometry}
          material={materials.totem2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface837_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface838_roof3_0.geometry}
          material={materials.roof3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface838_roof1_0.geometry}
          material={materials.roof1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface840_home_body_0.geometry}
          material={materials.home_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface841_roof1_0.geometry}
          material={materials.roof1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface846_windows_frame_0.geometry}
          material={materials.windows_frame}
        />
      </group>
      <group position={[-0.1, 0, -0.1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface304_windows_frame_0.geometry}
          material={materials.windows_frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface304_windows_background_0.geometry}
          material={materials.windows_background}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface304_wood2_0.geometry}
          material={materials.wood2}
        />
      </group>
      <group position={[-1.5, -0.3, 0.2]} scale={1.2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface488_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface491_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface492_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface493_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface494_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface495_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1133_wood2_0.geometry}
          material={materials.wood2}
        />
      </group>
      <group position={[-0.1, 0, 0.1]} rotation={[0, -0.1, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface374_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface394_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface395_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface396_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface397_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface398_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface399_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface400_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface401_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface402_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface403_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface404_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface405_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface406_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface407_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface408_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface409_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface410_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface411_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface412_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface413_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface414_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface415_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface416_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface417_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface418_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface419_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface420_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface421_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface422_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface423_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface424_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface425_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface426_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface427_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface428_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface429_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface497_wood2_0.geometry}
          material={materials.wood2}
        />
      </group>
      <group position={[0, 5.3, 1.4]} rotation={[0, 0.7, 0]} scale={1.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1380_windows_frame_0.geometry}
          material={materials.windows_frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1380_totem_0.geometry}
          material={materials.totem}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1380_windows_background_0.geometry}
          material={materials.windows_background}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1381_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1382_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1383_totem_0.geometry}
          material={materials.totem}
        />
      </group>
      <group
        position={[-2.2, 9.3, -3.7]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.1}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1325_totem_0.geometry}
          material={materials.totem}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1326_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1327_totem_0.geometry}
          material={materials.totem}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1328_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1330_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1331_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1332_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1333_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1334_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1335_wood2_0.geometry}
          material={materials.wood2}
        />
      </group>
      <group
        position={[14.7, -0.5, 17.6]}
        rotation={[-Math.PI, -1, -Math.PI]}
        scale={0.7}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface980_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface981_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface982_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface983_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface984_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface985_tree_body_0.geometry}
          material={materials.tree_body}
        />
      </group>
      <group position={[2.7, 0.3, -28.4]} rotation={[2.7, 1.5, -2.7]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface483_totem2_0.geometry}
          material={materials.totem2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface496_totem2_0.geometry}
          material={materials.totem2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface823_totem2_0.geometry}
          material={materials.totem2}
        />
      </group>
      <group position={[0, -0.9, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1034_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1035_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1036_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1037_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1038_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1039_tree_body_0.geometry}
          material={materials.tree_body}
        />
      </group>
      <group position={[-37.8, -1.5, 11.5]} rotation={[-Math.PI, -1, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1004_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1005_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1006_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1007_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1008_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1009_tree_body_0.geometry}
          material={materials.tree_body}
        />
      </group>
      <group position={[0, -1.4, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1040_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1041_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1042_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1043_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1044_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1045_tree_body_0.geometry}
          material={materials.tree_body}
        />
      </group>
      <group
        position={[-36.7, -1.3, 6.8]}
        rotation={[-Math.PI, -0.9, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1022_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1023_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1024_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1025_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1026_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1027_tree_body_0.geometry}
          material={materials.tree_body}
        />
      </group>
      <group position={[4.1, 0.2, -2.2]} scale={1.2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1090_roof3_0.geometry}
          material={materials.roof3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1091_roof3_0.geometry}
          material={materials.roof3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1092_roof3_0.geometry}
          material={materials.roof3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1093_roof3_0.geometry}
          material={materials.roof3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1094_roof3_0.geometry}
          material={materials.roof3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1095_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1096_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1097_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1098_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1099_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1100_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1101_totem_0.geometry}
          material={materials.totem}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1102_totem_0.geometry}
          material={materials.totem}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1103_totem_0.geometry}
          material={materials.totem}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1104_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1106_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1107_totem_0.geometry}
          material={materials.totem}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1107_phongE1_0.geometry}
          material={materials.phongE1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1108_totem_0.geometry}
          material={materials.totem}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1108_phongE1_0.geometry}
          material={materials.phongE1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1119_totem_0.geometry}
          material={materials.totem}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1120_totem_0.geometry}
          material={materials.totem}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1121_roof1_0.geometry}
          material={materials.roof1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1121_roof3_0.geometry}
          material={materials.roof3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1122_home_body_0.geometry}
          material={materials.home_body}
        />
      </group>
      <group position={[9.7, 0.8, 22.7]} rotation={[0, 0.1, 0]} scale={0.6}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface998_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface999_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1000_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1001_lambert2_0.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1002_lambert2_0.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1003_tree_body_0.geometry}
          material={materials.tree_body}
        />
      </group>
      <group position={[18.5, 2.4, 16.3]} scale={[0.2, 0.4, 0.2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1208_floor2_0.geometry}
          material={materials.floor2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1209_ground_0.geometry}
          material={materials.ground}
          position={[0, -0.9, 0]}
          scale={[1, 0.4, 1]}
        />
      </group>
      <group position={[0.5, 0, 1.2]} rotation={[0, -1.2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder139_fox_readyfox_body_0.geometry}
          material={materials.fox_readyfox_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder139_fox_readyfox_white_0.geometry}
          material={materials.fox_readyfox_white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder139_fox_readyfox_black_0.geometry}
          material={materials.fox_readyfox_black}
        />
      </group>
      <group position={[0, -0.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1150_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1151_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1152_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1153_roof1_0.geometry}
          material={materials.roof1}
        />
      </group>
      <group position={[-16.4, -2.7, -19.5]} scale={1.7}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1138_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1139_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1140_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1141_roof1_0.geometry}
          material={materials.roof1}
        />
      </group>
      <group position={[-9.9, -1.7, -12]} scale={1.4}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1158_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1159_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1160_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1161_roof1_0.geometry}
          material={materials.roof1}
        />
      </group>
      <group position={[-26.8, -4.8, -37.6]} scale={2.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1134_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1135_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1136_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1137_roof1_0.geometry}
          material={materials.roof1}
        />
      </group>
      <group position={[-3.2, -1.5, -8]} scale={1.2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1154_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1155_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1156_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1157_roof1_0.geometry}
          material={materials.roof1}
        />
      </group>
      <group position={[1.2, 4.7, -2.1]} rotation={[0, 0, -0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1210_shovel2_0.geometry}
          material={materials.shovel2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1211_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1212_shovel2_0.geometry}
          material={materials.shovel2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1213_shovel2_0.geometry}
          material={materials.shovel2}
        />
      </group>
      <group position={[-14.1, -3, -16.7]} scale={1.7}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1142_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1143_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1144_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1145_roof1_0.geometry}
          material={materials.roof1}
        />
      </group>
      <group position={[-7.6, -1.7, -9.2]} scale={1.4}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1146_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1147_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1148_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1149_roof1_0.geometry}
          material={materials.roof1}
        />
      </group>
      <group position={[-8, 0.5, 35.5]} rotation={[0, 1.3, 0]} scale={0.8}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1162_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1163_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1164_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1165_roof1_0.geometry}
          material={materials.roof1}
        />
      </group>
      <group position={[-0.8, -0.3, -1.4]} scale={0.9}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface924_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface925_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface926_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface927_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface928_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface929_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface930_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface931_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface932_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface933_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface934_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface935_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface936_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface937_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface938_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface939_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface940_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface941_tree_body_0.geometry}
          material={materials.tree_body}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface943_totem_0.geometry}
        material={materials.totem}
        position={[-1, 10.8, -36.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[2, 3.3, 2.4]}
      />
      <group
        position={[4.2, -0.3, 18.7]}
        rotation={[-Math.PI, -1.2, -Math.PI]}
        scale={0.5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface992_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface993_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface994_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface995_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface996_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface997_tree_body_0.geometry}
          material={materials.tree_body}
        />
      </group>
      <group position={[2.5, 1.3, -4.9]}>
        <group position={[6.3, -0.1, 11.4]} rotation={[0, -0.4, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface1168_fox_readyfox_body_0.geometry}
            material={materials.fox_readyfox_body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface1168_fox_readyfox_white_0.geometry}
            material={materials.fox_readyfox_white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface1168_fox_readyfox_black_0.geometry}
            material={materials.fox_readyfox_black}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1169_fox_readyfox_body_0.geometry}
          material={materials.fox_readyfox_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1169_fox_readyfox_white_0.geometry}
          material={materials.fox_readyfox_white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1169_fox_readyfox_black_0.geometry}
          material={materials.fox_readyfox_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1188_floor2_0.geometry}
          material={materials.floor2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1189_ground_0.geometry}
          material={materials.ground}
          position={[0, 0.1, 0]}
          scale={[1, 0.7, 1]}
        />
      </group>
      <group position={[1.1, 0, -0.1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1377_windows_frame_0.geometry}
          material={materials.windows_frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1377_windows_background_0.geometry}
          material={materials.windows_background}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1378_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1379_wood2_0.geometry}
          material={materials.wood2}
        />
      </group>
      <group position={[0, 0.2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1246_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1248_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1249_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1250_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1251_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1344_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1345_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1349_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1350_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1351_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1352_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1353_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1354_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1355_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1356_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1357_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1358_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1359_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1360_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1361_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1362_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1363_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1364_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1365_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1366_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1367_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1368_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1369_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1370_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1371_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1372_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1373_wood_0.geometry}
          material={materials.wood}
        />
      </group>
      <group position={[-28.5, 0, 4.5]} rotation={[0, 1.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1374_windows_frame_0.geometry}
          material={materials.windows_frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1374_windows_background_0.geometry}
          material={materials.windows_background}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1375_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1376_wood2_0.geometry}
          material={materials.wood2}
        />
      </group>
      <group position={[-0.3, 0, -0.9]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1337_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1338_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1339_windows_frame_0.geometry}
          material={materials.windows_frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1339_windows_background_0.geometry}
          material={materials.windows_background}
        />
      </group>
      <group
        position={[-18.6, 1.9, 34.1]}
        rotation={[-Math.PI, -1.3, -Math.PI]}
        scale={0.7}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1422_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1423_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1424_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1425_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1426_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1427_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1428_rocks1_0.geometry}
          material={materials.rocks1}
          position={[0, -0.4, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1429_rocks1_0.geometry}
          material={materials.rocks1}
          position={[0, -0.4, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1430_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1431_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1432_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1433_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1434_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1435_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1437_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1438_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1439_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1440_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1441_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1442_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1443_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1444_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1445_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1446_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1447_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1448_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1449_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1450_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1451_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1452_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1453_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1454_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1455_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1456_lambert2_0.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1457_lambert2_0.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1458_tree_body_0.geometry}
          material={materials.tree_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1459_tree2_0.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1460_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1461_tree1_0.geometry}
          material={materials.tree1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1462_rocks1_0.geometry}
          material={materials.rocks1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1463_rocks1_0.geometry}
          material={materials.rocks1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1464_rocks1_0.geometry}
          material={materials.rocks1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1465_rocks1_0.geometry}
          material={materials.rocks1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1466_rocks1_0.geometry}
          material={materials.rocks1}
        />
      </group>
      <group position={[-10.3, 0, 5.6]} rotation={[0, -0.4, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1525_rocks2_0.geometry}
          material={materials.rocks2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1526_rocks2_0.geometry}
          material={materials.rocks2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1531_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1532_shovel2_0.geometry}
          material={materials.shovel2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1533_shovel2_0.geometry}
          material={materials.shovel2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1534_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1535_bricks_2_0.geometry}
          material={materials.bricks_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1536_shovel2_0.geometry}
          material={materials.shovel2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1537_shovel2_0.geometry}
          material={materials.shovel2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1538_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1539_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1540_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1541_rocks2_0.geometry}
          material={materials.rocks2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1541_water_0.geometry}
          material={materials.water}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1542_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1543_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1544_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1545_wood_0.geometry}
          material={materials.wood}
        />
      </group>
      <group position={[0.1, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1547_wood2_0.geometry}
          material={materials.wood2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1547_wood_0.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1547_water_0.geometry}
          material={materials.water}
        />
      </group>
      <group position={[-22.4, -12.8, 9.5]} rotation={[-0.2, 0.8, 0.2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder183_fox_readyfox_body_0.geometry}
          material={materials.fox_readyfox_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder183_fox_readyfox_white_0.geometry}
          material={materials.fox_readyfox_white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder183_fox_readyfox_black_0.geometry}
          material={materials.fox_readyfox_black}
        />
      </group>
      <group position={[17.4, -10, 31.7]} rotation={[-1, -1, -0.5]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder185_fox_readyfox_body_0.geometry}
          material={materials.fox_readyfox_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder185_fox_readyfox_white_0.geometry}
          material={materials.fox_readyfox_white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder185_fox_readyfox_black_0.geometry}
          material={materials.fox_readyfox_black}
        />
      </group>
      <group position={[1.8, -10.1, -4.3]} rotation={[3, 0.3, 3.1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder186_fox_readyfox_body_0.geometry}
          material={materials.fox_readyfox_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder186_fox_readyfox_white_0.geometry}
          material={materials.fox_readyfox_white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder186_fox_readyfox_black_0.geometry}
          material={materials.fox_readyfox_black}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube12_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube13_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube14_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube15_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube16_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube17_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube18_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder11_floor_0.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder21_totem_0.geometry}
        material={materials.totem}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube27_totem_0.geometry}
        material={materials.totem}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube27_phongE1_0.geometry}
        material={materials.phongE1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere1_ground_0.geometry}
        material={materials.ground}
        position={[0, -1.2, 0]}
        scale={[1, 0.6, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder25_roof2_0.geometry}
        material={materials.roof2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube51_rocks1_0.geometry}
        material={materials.rocks1}
        position={[0.8, 0, -1.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube55_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube56_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube57_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube58_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface38_wood_0.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder92_wood_0.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1311_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1313_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1314_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1315_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1316_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1317_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface310_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface311_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface312_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface313_windows_frame_0.geometry}
        material={materials.windows_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface313_windows_background_0.geometry}
        material={materials.windows_background}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface314_windows_frame_0.geometry}
        material={materials.windows_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface315_windows_frame_0.geometry}
        material={materials.windows_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface337_roof1_0.geometry}
        material={materials.roof1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface337_roof3_0.geometry}
        material={materials.roof3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface338_totem2_0.geometry}
        material={materials.totem2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface339_roof1_0.geometry}
        material={materials.roof1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface342_roof3_0.geometry}
        material={materials.roof3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface342_roof1_0.geometry}
        material={materials.roof1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface343_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface345_home_body_0.geometry}
        material={materials.home_body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface345_tree_body_0.geometry}
        material={materials.tree_body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube106_roof3_0.geometry}
        material={materials.roof3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube107_roof3_0.geometry}
        material={materials.roof3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube108_roof3_0.geometry}
        material={materials.roof3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube109_roof3_0.geometry}
        material={materials.roof3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube113_roof3_0.geometry}
        material={materials.roof3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube114_roof3_0.geometry}
        material={materials.roof3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube115_roof3_0.geometry}
        material={materials.roof3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface437_wood_0.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder101_roof3_0.geometry}
        material={materials.roof3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder101_roof1_0.geometry}
        material={materials.roof1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface11_roof3_0.geometry}
        material={materials.roof3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface11_roof1_0.geometry}
        material={materials.roof1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface476_rocks_0.geometry}
        material={materials.rocks}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface477_rocks_0.geometry}
        material={materials.rocks}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface478_rocks_0.geometry}
        material={materials.rocks}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder122_wood_0.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface487_totem_0.geometry}
        material={materials.totem}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface469_wood_0.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface340_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube194_rocks1_0.geometry}
        material={materials.rocks1}
        position={[0, -0.2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1028_tree2_0.geometry}
        material={materials.tree2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1029_tree1_0.geometry}
        material={materials.tree1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1030_tree1_0.geometry}
        material={materials.tree1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1031_tree_body_0.geometry}
        material={materials.tree_body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1032_tree_body_0.geometry}
        material={materials.tree_body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1033_tree_body_0.geometry}
        material={materials.tree_body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube195_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube196_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube197_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface900_home_body_0.geometry}
        material={materials.home_body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface922_wood2_0.geometry}
        material={materials.wood2}
        position={[0, -0.1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface923_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface220_windows_frame_0.geometry}
        material={materials.windows_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube205_roof2_0.geometry}
        material={materials.roof2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder141_fox_readyfox_body_0.geometry}
        material={materials.fox_readyfox_body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder141_fox_readyfox_white_0.geometry}
        material={materials.fox_readyfox_white}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder141_fox_readyfox_black_0.geometry}
        material={materials.fox_readyfox_black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder142_fox_readyfox_body_0.geometry}
        material={materials.fox_readyfox_body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder142_fox_readyfox_white_0.geometry}
        material={materials.fox_readyfox_white}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder142_fox_readyfox_black_0.geometry}
        material={materials.fox_readyfox_black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube209_rocks2_0.geometry}
        material={materials.rocks2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder149_leika2_0.geometry}
        material={materials.leika2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface898_windows_frame_0.geometry}
        material={materials.windows_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1054_tree1_0.geometry}
        material={materials.tree1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1054_tree2_0.geometry}
        material={materials.tree2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1054_tree_body_0.geometry}
        material={materials.tree_body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface875_rocks_0.geometry}
        material={materials.rocks}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1166_tree1_0.geometry}
        material={materials.tree1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1166_tree2_0.geometry}
        material={materials.tree2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1166_tree_body_0.geometry}
        material={materials.tree_body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1167_windows_frame_0.geometry}
        material={materials.windows_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder159_roof2_0.geometry}
        material={materials.roof2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1125_roof3_0.geometry}
        material={materials.roof3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1125_phongE1_0.geometry}
        material={materials.phongE1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1125_totem_0.geometry}
        material={materials.totem}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1125_roof1_0.geometry}
        material={materials.roof1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1125_totem2_0.geometry}
        material={materials.totem2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1214_roof3_0.geometry}
        material={materials.roof3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1214_phongE1_0.geometry}
        material={materials.phongE1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1214_totem_0.geometry}
        material={materials.totem}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1214_roof1_0.geometry}
        material={materials.roof1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1214_totem2_0.geometry}
        material={materials.totem2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface319_wood_0.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface850_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1522_floor2_0.geometry}
        material={materials.floor2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1523_ground_0.geometry}
        material={materials.ground}
        position={[0, -0.1, 0]}
        scale={[1, 0.6, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface975_tree2_0.geometry}
        material={materials.tree2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface975_tree1_0.geometry}
        material={materials.tree1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface975_tree_body_0.geometry}
        material={materials.tree_body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface857_wood_0.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface860_wood_0.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1310_totem_0.geometry}
        material={materials.totem}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube213_roof2_0.geometry}
        material={materials.roof2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1318_windows_frame_0.geometry}
        material={materials.windows_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1080_wood_0.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1080_totem_0.geometry}
        material={materials.totem}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1244_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1074_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1340_windows_frame_0.geometry}
        material={materials.windows_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1340_windows_background_0.geometry}
        material={materials.windows_background}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1340_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1341_windows_frame_0.geometry}
        material={materials.windows_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1341_windows_background_0.geometry}
        material={materials.windows_background}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1341_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1342_windows_frame_0.geometry}
        material={materials.windows_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1342_windows_background_0.geometry}
        material={materials.windows_background}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1342_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1343_windows_frame_0.geometry}
        material={materials.windows_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1343_windows_background_0.geometry}
        material={materials.windows_background}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1343_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder160_rocks2_0.geometry}
        material={materials.rocks2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1491_wood2_0.geometry}
        material={materials.wood2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1491_shovel2_0.geometry}
        material={materials.shovel2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1491_wood_0.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1491_totem_0.geometry}
        material={materials.totem}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1489_wood_0.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1489_totem_0.geometry}
        material={materials.totem}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube223_phongE1_0.geometry}
        material={materials.phongE1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube224_phongE1_0.geometry}
        material={materials.phongE1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube225_phongE1_0.geometry}
        material={materials.phongE1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCone10_phongE1_0.geometry}
        material={materials.phongE1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube245_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube246_rocks1_0.geometry}
        material={materials.rocks1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube247_rocks1_0.geometry}
        material={materials.rocks1}
        position={[-21, 0, 18.5]}
        rotation={[0, 1.1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube248_rocks1_0.geometry}
        material={materials.rocks1}
        position={[-25.6, -1.4, -22.4]}
        rotation={[-0.1, -0.1, -0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube252_rocks1_0.geometry}
        material={materials.rocks1}
        position={[-31.1, 0, 38.3]}
        rotation={[-Math.PI, 0.1, -Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("/models/island.glb");
