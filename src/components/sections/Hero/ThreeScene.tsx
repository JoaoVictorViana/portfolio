'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function CameraRig() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.6 - camera.position.x) * 0.04
    camera.position.y += (-mouse.current.y * 0.6 - camera.position.y) * 0.04
    camera.lookAt(0, 0, 0)
  })

  return null
}

function TorusKnotMesh() {
  const solidRef = useRef<THREE.Mesh>(null)
  const wireRef = useRef<THREE.Mesh>(null)

  const geometry = useMemo(
    () => new THREE.TorusKnotGeometry(1.1, 0.32, 180, 24, 2, 3),
    []
  )

  useFrame(() => {
    if (!solidRef.current || !wireRef.current) return
    solidRef.current.rotation.x += 0.006
    solidRef.current.rotation.y += 0.009
    wireRef.current.rotation.x = solidRef.current.rotation.x
    wireRef.current.rotation.y = solidRef.current.rotation.y
  })

  return (
    <>
      <mesh ref={solidRef} geometry={geometry}>
        <meshPhongMaterial
          color={0x0d2654}
          emissive={0x112244}
          specular={0x3b82f6}
          shininess={80}
          transparent
          opacity={0.92}
        />
      </mesh>
      <mesh ref={wireRef} geometry={geometry}>
        <meshBasicMaterial
          color={0x3b82f6}
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>
    </>
  )
}

function OrbitalRings() {
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += 0.004
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= 0.003
      ring2Ref.current.rotation.y += 0.002
    }
  })

  return (
    <>
      <mesh ref={ring1Ref} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.0, 0.015, 12, 120]} />
        <meshBasicMaterial color={0x3b82f6} transparent opacity={0.35} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.35, 0.01, 12, 120]} />
        <meshBasicMaterial color={0x22d3ee} transparent opacity={0.2} />
      </mesh>
    </>
  )
}

function Particles() {
  const COUNT = 160

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      const r = 2.4 + Math.random() * 1.4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={0x60a5fa} size={0.035} transparent opacity={0.7} />
    </points>
  )
}

function PulsingLights() {
  const lightARef = useRef<THREE.PointLight>(null)
  const lightBRef = useRef<THREE.PointLight>(null)
  const t = useRef(0)

  useFrame(() => {
    t.current += 0.008
    if (lightARef.current) {
      lightARef.current.intensity = 3.5 + Math.sin(t.current * 1.5) * 1.5
    }
    if (lightBRef.current) {
      lightBRef.current.intensity = 2.5 + Math.cos(t.current * 1.2) * 1.2
    }
  })

  return (
    <>
      <ambientLight color={0x1a2a4a} intensity={3} />
      <pointLight
        ref={lightARef}
        color={0x3b82f6}
        intensity={4}
        distance={12}
        position={[3, 3, 3]}
      />
      <pointLight
        ref={lightBRef}
        color={0x22d3ee}
        intensity={3}
        distance={12}
        position={[-3, -2, 2]}
      />
    </>
  )
}

function Scene() {
  return (
    <>
      <PulsingLights />
      <TorusKnotMesh />
      <OrbitalRings />
      <Particles />
      <CameraRig />
    </>
  )
}

export function ThreeScene() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-blue/20 animate-pulse" />
      </div>
    )
  }

  return (
    <div
      className="w-full h-full rounded-full overflow-hidden"
      style={{
        boxShadow:
          '0 0 0 1px rgba(59,130,246,.15), 0 0 60px rgba(59,130,246,.18), 0 0 120px rgba(34,211,238,.08)',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
