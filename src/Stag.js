/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import * as THREE from 'three';
import { LoopOnce } from 'three';

export default function Stag() {
  const { scene, animations } = useGLTF('/Stag.gltf');
  const stagRef = useRef();
  const { actions, names } = useAnimations(animations, stagRef);

  //   const [playing, setPlaying] = useState(false);

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
  console.log(names);

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

  //   function fadeToAction(name, duration) {
  //     let activeAction, previousAction;
  //     previousAction = activeAction;
  //     activeAction = actions[name];

  //     if (previousAction !== activeAction) {
  //       previousAction.fadeOut(duration);
  //     }

  //     activeAction.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(duration).play();
  //   }

  useEffect(() => {
    const drink = actions[names[3]];
    const stomp = actions[names[6]];
    const sweep = actions[names[7]];
    const walk = actions[names[12]];

    // actions[names[3]].play();
    drink.play();
    // walk.clampWhenFinished = true;
    // walk.reset();
    // if (walk.finished === true) {
    //   drink.play();
    //   drink.clampWhenFinished = true;
    //   drink.loop = THREE.LoopOnce;
    // }
    // drink.reset();
    // if (drink.finished === true) {
    //   stomp.play();
    // //   stomp.clampWhenFinished = true;
    //   stomp.loop = THREE.LoopOnce;
    // }
    // stomp.reset();
    // sweep.play();
    // sweep.clampWhenFinished = true;
    // sweep.loop = THREE.LoopOnce;
    // sweep.reset();
    // if (walk.isRunning === true) {
    //   stagRef.current.position.z += 0.5;
    // }
    // challenge.loop = THREE.LoopOnce;
    // challenge.clampWhenFinished = true;
    // challenge.reset();
    // drink.play();
    // drink.loop = THREE.LoopOnce;
    // drink.clampWhenFinished = true;
    // drink.reset();
    // walk.play();
    // walk.loop = THREE.LoopOnce;
    console.log("we're animating!");
  });

  //   const clickHandler = () => {
  //     actions
  //   };

  return (
    <group>
      <mesh ref={stagRef}>
        <primitive object={scene} />
      </mesh>
    </group>
  );
}
