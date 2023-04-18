"use client"

import { OrbitControls, Stars, Box } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function Scene() {
  return (
    <Canvas>
      <OrbitControls/>
      <ambientLight intensity={0.5}/>
      <Stars radius={100} depth={300} count={1000} factor={4} saturation={0} fade speed={1} />
      <Box args={[3,3,0.4]} material-color='yellow'/>
    </Canvas>
  )
}
