"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

const NODE_COUNT = 32;
const CONNECTION_DISTANCE = 3.2;

const mouse = { x: 0, y: 0 };

function MouseTracker() {
  const { camera } = useThree();
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    targetRef.current.x += (mouse.x * 2 - targetRef.current.x) * 0.04;
    targetRef.current.y += (mouse.y * 1.2 - targetRef.current.y) * 0.04;
    camera.position.x = targetRef.current.x;
    camera.position.y = targetRef.current.y;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function NeuralNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  const nodes = useMemo(() => {
    return Array.from({ length: NODE_COUNT }, (_, i) => {
      const tier = i % 4;
      const colors = ["#a855f7", "#22d3ee", "#c084fc", "#67e8f9"];
      const emissives = ["#7c3aed", "#0891b2", "#9333ea", "#0e7490"];
      return {
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6,
        ),
        color: colors[tier],
        emissive: emissives[tier],
        scale: 0.07 + Math.random() * 0.13,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.6 + Math.random() * 1.4,
        orbitRadius: 0.3 + Math.random() * 0.5,
        orbitSpeed: (Math.random() - 0.5) * 0.4,
      };
    });
  }, []);

  const edges = useMemo(() => {
    const result: Array<{ a: number; b: number; opacity: number }> = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < CONNECTION_DISTANCE) {
          result.push({ a: i, b: j, opacity: 0.7 - dist / CONNECTION_DISTANCE });
        }
      }
    }
    return result;
  }, [nodes]);

  const lineGeometry = useMemo(() => {
    const positions: number[] = [];
    for (const edge of edges) {
      const a = nodes[edge.a].position;
      const b = nodes[edge.b].position;
      positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [edges, nodes]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.05 + mouse.x * 0.15;
      groupRef.current.rotation.x = Math.sin(t * 0.03) * 0.12 + mouse.y * 0.08;
    }
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const n = nodes[i];
      const pulse = 0.6 + Math.sin(t * n.pulseSpeed + n.pulseOffset) * 0.4;
      (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse;
      mesh.position.y = n.position.y + Math.sin(t * n.orbitSpeed + n.pulseOffset) * n.orbitRadius;
    });
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#581c87" opacity={0.28} transparent />
      </lineSegments>
      {nodes.map((node, i) => (
        <Sphere
          key={i}
          ref={(el) => { meshRefs.current[i] = el; }}
          position={node.position}
          args={[node.scale, 10, 10]}
        >
          <meshStandardMaterial
            color={node.color}
            emissive={node.emissive}
            emissiveIntensity={0.8}
            roughness={0.15}
            metalness={0.7}
          />
        </Sphere>
      ))}
    </group>
  );
}

export function NeuralNetCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 11], fov: 65 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <MouseTracker />
      <ambientLight intensity={0.1} />
      <pointLight position={[8, 6, 6]} intensity={18} color="#a855f7" />
      <pointLight position={[-8, -5, 4]} intensity={12} color="#22d3ee" />
      <pointLight position={[0, 8, -4]} intensity={8} color="#7c3aed" />
      <pointLight position={[0, 0, 8]} intensity={5} color="#c084fc" />
      <NeuralNodes />
    </Canvas>
  );
}
