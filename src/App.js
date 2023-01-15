/* eslint-disable react/no-unknown-property */
import { Cloud, Environment, Loader, OrbitControls, Sparkles } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './App.css';
import { ACESFilmicToneMapping, sRGBEncoding } from 'three';
import Experience from './Experience';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 400,
          position: [0, 18, 50],
        }}
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          outputEncoding: sRGBEncoding,
        }}
      >
        <Environment
          preset="sunset"
          background
          files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
        />
        <Experience />
        <OrbitControls />
        <ambientLight intensity={0.8} />
        <Sparkles
          count={200}
          scale={[15, 10, 15]}
          opacity={0.6}
          position={[0, 5, 0]}
          size={10}
          factor={10}
          saturation={0}
          speed={0.5}
          fadeSpeed={0.01}
          depthWrite={false}
        />
        {/* <Cloud
          scale={[10, 10, 10]}
          speed={0.1}
          opacity={0.8}
          // factor={10}
          // radius={0.1}
          // detail={0.5}
        /> */}
      </Canvas>
    </Suspense>
  );
}

export default App;
