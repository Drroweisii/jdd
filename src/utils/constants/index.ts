import { GRID_SIZE, SLOT_COSTS } from './grid';
import { MINING_CONFIG, MINING_MULTIPLIER } from './mining';
import { WORKER_CONFIG, MERGE_RULES, WORKER_RARITY } from './workers';
import { ANIMATIONS } from './animations';

// Export combined configs
export const GAME_CONFIG = {
  ...MINING_CONFIG,
  ...WORKER_CONFIG,
  SLOT_COSTS,
  GRID_SIZE,
  MERGE_RULES,
  WORKER_RARITY,
  ANIMATIONS
};

export {
  GRID_SIZE,
  SLOT_COSTS,
  MINING_CONFIG,
  MINING_MULTIPLIER,
  WORKER_CONFIG,
  MERGE_RULES,
  WORKER_RARITY,
  ANIMATIONS
};