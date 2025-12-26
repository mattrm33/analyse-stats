'use client';
import ThreeScene from '@/components/ThreeScene';
import { ShieldAlert, Crosshair, Users } from 'lucide-react';

export default function MatchAnalysis() {
  // Mock data - En production, ces données proviennent de votre API
  const mockPlayers: any[] = [
    { position: [10, 0, 5], team: 'CT' },
    { position: [-20, 0, 15], team: 'T' }
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <ShieldAlert className="text-orange-500" /> Analyse Tactique : de_mirage
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {/* Panneau latéral : Events */}
          <div className="col-span-1 bg-slate-900 p-4 rounded-xl border border-white/10 h-[600px] overflow-y-auto">
            <h3 className="font-semibold mb-4 border-b border-white/10 pb-2">Timeline du Round 4</h3>
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex gap-3 text-sm mb-4 items-center">
                <span className="text-slate-500">00:4{i}</span>
                <p><span className="text-blue-400">Player_{i}</span> killed <span className="text-red-400">Enemy</span> with AK-47</p>
              </div>
            ))}
          </div>

          {/* Centre : Visualisation 3D */}
          <div className="col-span-2 space-y-4">
            <ThreeScene players={mockPlayers} />
            
            <div className="bg-slate-900 p-6 rounded-xl border border-white/10">
              <h3 className="font-semibold mb-2">Conseil IA du Coach</h3>
              <p className="text-slate-400 italic font-serif">
                "Vous avez perdu 3 rounds d'affilée en A-Main. Votre placement de grenade était trop tardif. Essayez de lancer votre smoke 2 secondes plus tôt."
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
