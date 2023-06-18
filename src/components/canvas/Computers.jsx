/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Suspense, useEffect, useState } from 'react';
// Canvas allows to put anything on canvas
import { Canvas } from '@react-three/fiber';
// useGLTF allows to use 3D models
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const pc = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black"/>
      <pointLight intensity={0.5}/>
      <primitive 
        object={pc.scene}
        scale={2}
        position={[-5,-3.5,-2]}
        rotation={[-0.0,0.6,-0.05]}
        />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas frameloop='demands' shadows
      // camera is the view of 3D model, fov is field of view
      camera={{position: [20,3,5], fov: 60}}
      gl={{preserveDrawingBuffer: true}}>
        <Suspense >
          {/* OrbitControls manages how 3D works */}
          <OrbitControls enableZoom={false}
            maxPolarAngle={Math.PI / 2 }
            minPolarAngle={Math.PI / 2}/>
          <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
  )
}

export default ComputersCanvas