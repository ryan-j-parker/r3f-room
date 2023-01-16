/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF, useTexture } from '@react-three/drei';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import * as THREE from 'three';
import { DoubleSide } from 'three';
import { LoopOnce } from 'three';
import Grid from './Grid';
import Plane from './Plane';
import Stag from './Stag';

export default function Experience() {
  const props = useTexture({
    map: '/textures/terracotta/TilesTerracottaRedHexagon001_COL_2k.jpg',
    normalMap: '/textures/terracotta/TilesTerracottaRedHexagon001_NRM_2k.jpg',
    aoMap: '/textures/terracotta/TilesTerracottaRedHexagon001_AO_2k.jpg',
    displacementMap: '/textures/terracotta/TilesTerracottaRedHexagon001_DISP_2k.jpg',
    roughnessMap: '/textures/terracotta/TilesTerracottaRedHexagon001_GLOSS_2k.jpg',
    metalnessMap: '/textures/terracotta/TilesTerracottaRedHexagon001_REFL_2k.jpg',
  });

  const grid = useRef();

  const sphereMap = useTexture('/textures/terracotta/TilesTerracottaRedHexagon001_Sphere.png');

  return (
    <>
      {/* <Stag /> */}
      {/* <Grid /> */}
      {/* <mesh position={[0, -0.1, 0]} rotation={[Math.PI * -0.5, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshPhongMaterial color="green" side={DoubleSide} roughness={0.5} />
      </mesh> */}
      {/* <mesh position={[-10, -0.1, -10]} rotation={[Math.PI * -0.5, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          {...props}
          side={DoubleSide}
          displacementScale={0.1}
        //   roughness={0.7}
        //   metalness={0.1}
        />
      </mesh> */}
      <Plane />
    </>
  );
}
