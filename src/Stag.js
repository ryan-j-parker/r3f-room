/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Clone, useAnimations, useGLTF } from '@react-three/drei';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import * as THREE from 'three';
import { LoopOnce } from 'three';
import { useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Stag() {
  const { scene, animations } = useGLTF('/Stag.gltf');
  const stagRef = useRef();
  const { actions, names } = useAnimations(animations, stagRef);
  const copiedScene = useMemo(() => scene.clone(), [scene]);
  const copiedAnimations = useMemo(() => animations.map((a) => a.clone()), [animations]);

  const threat = actions[names[0]];
  const kick = actions[names[1]];
  const dead = actions[names[2]];
  const drink = actions[names[3]];
  const run = actions[names[4]];
  const leap = actions[names[5]];
  const stomp = actions[names[6]];
  const sweep = actions[names[7]];
  const challenge = actions[names[8]];
  const alertL = actions[names[9]];
  const alertR = actions[names[10]];
  const vault = actions[names[11]];
  const walk = actions[names[12]];

  console.log('names: ', names);
  console.log('scene: ', scene);

  const animationNames = [
    'Attack_Headbutt',
    'Attack_Kick',
    'Death',
    'Eating',
    'Gallop',
    'Gallop_Jump',
    'Idle',
    'Idle_2',
    'Idle_Headlow',
    'Idle_HitReact1',
    'Idle_HitReact2',
    'Jump_toIdle',
    'Walk',
  ];

  const animationes = [
    { 0: 'Attack_Headbutt' },
    { 1: 'Attack_Kick' },
    { 2: 'Death' },
    { 3: 'Eating' },
    { 4: 'Gallop' },
    { 5: 'Gallop_Jump' },
    { 6: 'Idle' },
    { 7: 'Idle_2' },
    { 8: 'Idle_Headlow' },
    { 9: 'Idle_HitReact1' },
    { 10: 'Idle_HitReact2' },
    { 11: 'Jump_toIdle' },
    { 12: 'Walk' },
  ];

  console.log(actions);

  const stag1 = useRef();
  const stag2 = useRef();
  const stag3 = useRef();

  useFrame(() => {
    const attack = actions[names[0]];
    const kick = actions[names[1]];
    const dead = actions[names[2]];
    const drink = actions[names[3]];
    const run = actions[names[4]];
    const leap = actions[names[5]];
    const stomp = actions[names[6]];
    const sweep = actions[names[7]];
    const challenge = actions[names[8]];
    const hitReactL = actions[names[9]];
    const hitReactR = actions[names[10]];
    const vault = actions[names[11]];
    const walk = actions[names[12]];
    stomp.play();
    // setTimeout(() => {
    //   drink.play();
    //   stomp.play();
    //   sweep.play();
    //   walk.play();
    //   stomp.play();
    //   kick.play();
    // }, 5000);
    console.log("we're animating!");

  });

  return (
    <group ref={stagRef} castShadow receiveShadow>
      <primitive
        ref={stag1}
        object={copiedScene}
        rotation={[0, (Math.random() - 0.5) * 2, 0]}
        position={[(Math.random() - 0.5) * 10, 0, (Math.random() - 0.5) * 10]}
      />
    </group>
  );
}
