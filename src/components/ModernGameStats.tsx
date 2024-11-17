import React from 'react';
import { GameState } from '../types/game';
import { useGameStatement } from '../hooks/useGameStatement';
import { Coins, DollarSign, Bitcoin } from 'lucide-react';

interface ModernGameStatsProps {
  gameState: GameState;
}

export function ModernGameStats({ gameState }: ModernGameStatsProps) {
  const { formattedBalances, formattedRates } = useGameStatement(gameState);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
      <div className="flex gap-3">
        <StatCard
          icon={<Coins className="w-4 h-4" />}
          name="EMSX"
          value={formattedBalances.emsx}
          rate={formattedRates.emsx}
          color="purple"
        />
        <StatCard
          icon={<DollarSign className="w-4 h-4" />}
          name="USDT"
          value={formattedBalances.usdt}
          rate={formattedRates.usdt}
          color="green"
        />
        <StatCard
          icon={<Bitcoin className="w-4 h-4" />}
          name="BTC"
          value={formattedBalances.btc}
          rate={formattedRates.btc}
          color="orange"
        />
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  name: string;
  value: string;
  rate: string;
  color: string;
}

function StatCard({ icon, name, value, rate, color }: StatCardProps) {
  return (
    <div className={`flex-1 bg-${color}-500/10 rounded-xl p-3 border border-${color}-500/20`}>
      <div className="flex items-center gap-2 mb-1">
        <div className={`bg-${color}-500/20 rounded-lg p-1.5`}>
          {icon}
        </div>
        <span className="text-xs text-gray-400">{name}</span>
      </div>
      <div>
        <p className="text-lg font-bold text-white leading-tight">{value}</p>
        <p className="text-xs text-gray-400">+{rate}/s</p>
      </div>
    </div>
  );
}