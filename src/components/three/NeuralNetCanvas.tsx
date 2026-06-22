"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

const NODE_COUNT = 22;
const CONNECTION_DISTANCE = 2.8;

function NeuralNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  const nodes = useMemo(() => {
    return Array.from({ length: NODE_COUNT }, (_, i) => {
      const isPurple = i % 3 !== 1;
      return {
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 7,
          (Math.random() - 0.5) * 7,
          (Math.random() - 0.5) * 4,
        ),
        color: isPurple ? "#a855f7" : "#22d3ee",
        emissive: isPurple ? "#7c3aed" : "#0891b2",
        scale: 0.06 + Math.random() * 0.1,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.8 + Math.random() * 1.2,
      };
    });
  }, []);

  const edges = useMemo(() => {
    const result: Array<{ start: THREE.Vector3; end: THREE.Vector3; opacity: number }> = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < CONNECTION_DISTANCE) {
          result.push({
            start: nodes[i].position.clone(),
            end: nodes[j].position.clone(),
            opacity: 1 - dist / CONNECTION_DISTANCE,
          });
        }
      }
    }
    return result;
  }, [nodes]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.07;
      groupRef.current.rotation.x = Math.sin(t * 0.04) * 0.18;
    }
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const node = nodes[i];
      const pulse = 0.75 + Math.sin(t * node.pulseSpeed + node.pulseOffset) * 0.25;
      (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse;
    });
  });

  return (
    <group ref={groupRef}>
      {/* Connection lines rendered via LineSegments for performance */}
      <EdgeLines edges={edges} />

      {/* Nodes */}
      {nodes.map((node, i) => (
        <Sphere
          key={i}
          ref={(el) => { meshRefs.current[i] = el; }}
          position={node.position}
          args={[node.scale, 12, 12]}
        >
          <meshStandardMaterial
            color={node.color}
            emissive={node.emissive}
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.6}
          />
        </Sphere>
      ))}
    </group>
  );
}

function EdgeLines({
  edges,
}: {
  edges: Array<{ start: THREE.Vector3; end: THREE.Vector3; opacity: number }>;
}) {
  const lineRef = useRef<THREE.LineSegments>(null);

  const { geometry, opacities } = useMemo(() => {
    const positions: number[] = [];
    const ops: number[] = [];
    for (const edge of edges) {
      positions.push(edge.start.x, edge.start.y, edge.start.z);
      positions.push(edge.end.x, edge.end.y, edge.end.z);
      ops.push(edge.opacity, edge.opacity);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return { geometry: geo, opacities: ops };
  }, [edges]);

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial
        color="#6d28d9"
        opacity={0.35}
        transparent
        linewidth={1}
      />
    </lineSegments>
  );
}

export function NeuralNetCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 55 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={12} color="#a855f7" />
      <pointLight position={[-6, -4, 3]} intensity={8} color="#22d3ee" />
      <pointLight position={[0, 6, -3]} intensity={6} color="#7c3aed" />
      <NeuralNodes />
    </Canvas>
  );
}
