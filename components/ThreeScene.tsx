import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, PerspectiveCamera } from '@react-three/drei';

interface PlayerMarker {
  position: [number, number, number];
  team: 'CT' | 'T';
}

export default function ThreeScene({ players }: { players: PlayerMarker[] }) {
  return (
    <div className="w-full h-[400px] bg-slate-900 rounded-lg">
      <Canvas shadowMap>
        <PerspectiveCamera makeDefault position={[50, 50, 50]} />
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[100, 100, 100]} castShadow />
        
        {/* Grille de référence tactique */}
        <Grid infiniteGrid fadeDistance={100} sectionColor="#334155" cellColor="#1e293b" />

        {/* Rendu des joueurs selon les données de la démo */}
        {players.map((p, i) => (
          <mesh key={i} position={p.position}>
            <sphereGeometry args={[1.5, 16, 16]} />
            <meshStandardMaterial color={p.team === 'CT' ? '#3b82f6' : '#ef4444'} />
          </mesh>
        ))}
      </Canvas>
    </div>
  );
}
