import { Worker } from './game';

export type WorkerType = 'emsx' | 'usdt' | 'btc';
export type CurrencyType = 'emsx' | 'usdt' | 'btc';

export interface WorkerStats {
  baseRate: number;
  speedMultiplier: number;
  powerMultiplier: number;
  comboBonus: number;
  luckChance: number;
}

export interface WorkerTypeConfig {
  name: string;
  description: string;
  icon: string;
  color: string;
  currency: CurrencyType;
  stats: WorkerStats;
  cost: number;
  maxLevel?: number;
  specialAbility?: {
    name: string;
    description: string;
    trigger: (worker: Worker) => boolean;
    effect: (worker: Worker) => void;
  };
}