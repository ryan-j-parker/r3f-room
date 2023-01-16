/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { DoubleSide, GridHelper } from 'three';

export default function PlaneSquare(props) {
  const plane = useRef();
  const grid = useRef();

  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState();
  const [color, setColor] = useState('transparent');
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      setColor(green);
      setClicked(false);
    }
  }, [clicked]);

  const clickHandler = (e) => {
    e.stopPropagation();
    setClicked(true);
  };

  const highlightHandler = (e) => {
    setHovered(true);
  };

  const unHighlightHandler = (e) => {
    setHovered(false);
  };

  useEffect(() => {
    highlightHandler();
    unHighlightHandler();
  }, []);

  const greens = [
    '#11270B',
    '#71B340',
    '#669D31',
    '#598B2C',
    '#3C5A14',
    // '#028090',
    // '#0FA3B1',
    // '#548687',
    // '#16BAC5',
  ];

  const green = greens[Math.floor(Math.random() * greens.length)];

  return (
    <group ref={plane}>
      <mesh
        {...props}
        receiveShadow
        onPointerOver={highlightHandler}
        onPointerOut={unHighlightHandler}
        rotation={[Math.PI * -0.5, 0, 0]}
        onClick={clickHandler}
      >
        <planeGeometry args={[2, 2]} />
        {clicked ? (
          <meshStandardMaterial color={green} opacity={1} transparent={false} side={DoubleSide} />
        ) : (
          <meshStandardMaterial
            color={hovered ? green : 'white'}
            opacity={hovered ? 1 : 0}
            transparent={hovered ? false : true}
            side={DoubleSide}
          />
        )}
      </mesh>
      {/* <gridHelper ref={grid} color="transparent" args={[22, 10]} /> */}
    </group>
  );
}
