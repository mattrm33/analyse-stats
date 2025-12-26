import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, TrendingUp, Zap, Shield } from 'lucide-react';

const data = [
  { name: 'Match 1', kd: 1.2, hs: 45 },
  { name: 'Match 2', kd: 0.8, hs: 30 },
  { name: 'Match 3', kd: 1.5, hs: 55 },
  { name: 'Match 4', kd: 1.1, hs: 40 },
];

export default function Dashboard() {
  return (
    <div className="p-8 bg-slate-950 text-white min-h-screen">
      <header className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          CS:ANALYTICS PRO
        </h1>
        <p className="text-slate-400">Analyse de performance en temps réel</p>
      </header>

      {/* Statistiques Globales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatCard icon={<Target className="text-orange-500"/>} label="K/D Ratio" value="1.24" trend="+5%" />
        <StatCard icon={<Zap className="text-yellow-500"/>} label="Headshots" value="52.4%" trend="+2.1%" />
        <StatCard icon={<TrendingUp className="text-green-500"/>} label="Win Rate" value="58%" trend="+12%" />
        <StatCard icon={<Shield className="text-blue-500"/>} label="ADR" value="84.2" trend="-1.5%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Graphique de Progression */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-xl mb-4 font-semibold">Évolution du K/D</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{backgroundColor: '#0f172a', border: 'none'}} />
                <Line type="monotone" dataKey="kd" stroke="#f97316" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Mini Replay 3D Placeholder */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col items-center justify-center">
          <h3 className="text-xl mb-4 font-semibold self-start">Visualisation Tactique 3D</h3>
          <div className="w-full h-64 bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden">
             {/* Ici s'insère le composant Three.js */}
             <p className="text-slate-500 italic">[ Vue 3D Interactive de Mirage ]</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, trend }: any) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-slate-800 rounded-lg">{icon}</div>
        <span className={`text-xs ${trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{trend}</span>
      </div>
      <p className="text-slate-400 text-sm">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
