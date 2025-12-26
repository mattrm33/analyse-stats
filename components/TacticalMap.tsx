import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';

export default function TacticalMap() {
  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 50, 100]} />
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        
        {/* Représentation simplifiée de la Map (ex: De_Dust2) */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>

        {/* Joueur (représenté par une sphère) */}
        <mesh position={[10, 1, 5]}>
          <sphereGeometry args={[1]} />
          <meshStandardMaterial color="#f97316" />
        </mesh>
      </Canvas>
    </div>
  );
}
