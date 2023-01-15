/* eslint-disable react/no-unknown-property */
import React from 'react';
import { GridHelper } from 'three';
import * as THREE from 'three';
import { useRef } from 'react';
import { PerspectiveCamera, useFBX } from '@react-three/drei';

export default function Grid() {
  const mousePosition = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  let intersects;

  //   const gridHelper = new GridHelper(20, 20);

  const grid = useRef();
  const camera = new THREE.PerspectiveCamera();

  //   const highlightRef = useRef();

  //   const handleHighlight = (e) => {
  //     mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
  //     mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
  //     raycaster.setFromCamera(mousePosition, camera);
  //     intersects = raycaster.intersectObjects(grid.current.children);
  //     const highlightPos = new THREE.Vector3().copy(intersects.point).floor().addScalar(0.5);
  //     highlightRef.position.set(highlightPos, 0, highlightPos);

  //     if (intersects.length > 0) {
  //       //   intersects[0].object.material.color.set(0xccd990);
  //       // grid.current.material.color.set(
  //       intersects[0].object.material.color.set(
  //         `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * 100}%)`
  //       );
  //     }
  //   };

  //   function HighlightMesh() {

  //     return (
  //       <mesh ref={highlightRef}>
  //         <planeGeometry args={[1, 1]} />
  //         <meshBasicMaterial visible={false} />
  //       </mesh>
  //     );
  //   }

  const grass1 = useFBX('/Grass_fbx/Grass1.fbx');
  const grassClone = grass1.clone();
  const grass2 = useFBX('/Grass_fbx/Grass2.fbx');
  const grassCloneAlso = grass2.clone();

  return (
    <>
      <group>
        <gridHelper ref={grid} color="transparent" args={[20, 20]} />
        <mesh
          //   onPointerOver={handleHighlight}
          position={[0, -0.1, 0]}
          rotation={[Math.PI * -0.5, 0, 0]}
        >
          <meshStandardMaterial visible={false} />
          <planeGeometry args={[20, 20]} />
        </mesh>
        <primitive scale={7} dispose={null} object={grassClone} />
        <primitive scale={7} dispose={null} object={grassCloneAlso} />
        {/* <primitive object={grass2.scene} /> */}
        {/* <HighlightMesh /> */}
      </group>
    </>
  );
}
