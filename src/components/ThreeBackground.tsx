import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Floating objects data
    const objects: Array<{
      mesh: THREE.Mesh;
      velocity: THREE.Vector3;
      rotationSpeed: THREE.Vector3;
    }> = [];

    // Create floating geometry objects (representing tech icons)
    const createFloatingObject = (color: number, size: number, position: THREE.Vector3) => {
      const geometry = new THREE.BoxGeometry(size, size, size);
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.7,
        wireframe: false
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(position);

      // Add subtle glow effect
      const edges = new THREE.EdgesGeometry(geometry);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.5
      });
      const wireframe = new THREE.LineSegments(edges, lineMaterial);
      mesh.add(wireframe);

      return mesh;
    };

    // Tech-themed colors
    const techColors = [
      0x7c3aed, // Purple
      0xa855f7, // Light purple
      0x3b82f6, // Blue
      0x06b6d4, // Cyan
      0x10b981, // Green
      0xf59e0b, // Yellow
      0xef4444, // Red
      0x8b5cf6  // Violet
    ];

    // Create floating objects
    for (let i = 0; i < 15; i++) {
      const color = techColors[Math.floor(Math.random() * techColors.length)];
      const size = Math.random() * 0.3 + 0.2;
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4
      );

      const mesh = createFloatingObject(color, size, position);
      scene.add(mesh);

      objects.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01
        ),
        rotationSpeed: new THREE.Vector3(
          Math.random() * 0.02,
          Math.random() * 0.02,
          Math.random() * 0.02
        )
      });
    }

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Update each object
      objects.forEach(({ mesh, velocity, rotationSpeed }) => {
        // Move the object
        mesh.position.add(velocity);

        // Rotate the object
        mesh.rotation.x += rotationSpeed.x;
        mesh.rotation.y += rotationSpeed.y;
        mesh.rotation.z += rotationSpeed.z;

        // Bounce off boundaries
        if (mesh.position.x > 6 || mesh.position.x < -6) {
          velocity.x *= -1;
        }
        if (mesh.position.y > 4 || mesh.position.y < -4) {
          velocity.y *= -1;
        }
        if (mesh.position.z > 2 || mesh.position.z < -2) {
          velocity.z *= -1;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default ThreeBackground; 