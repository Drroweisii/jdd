import React, { useState } from 'react';
import { Worker } from '../types/game';
import { ModernWorker } from './ModernWorker';
import { Inbox, X } from 'lucide-react';

interface FloatingMinerProps {
  storedMiners: Worker[];
  onUseMiner: (worker: Worker) => void;
  balance: number;
  hasAvailableSpace: boolean;
}

export function FloatingMiner({ 
  storedMiners, 
  onUseMiner, 
  balance, 
  hasAvailableSpace 
}: FloatingMinerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 z-50 bg-purple-500 hover:bg-purple-600 
                   text-white rounded-full p-3 shadow-lg transition-all duration-200
                   flex items-center gap-2"
      >
        <Inbox className="w-5 h-5" />
        {storedMiners && storedMiners.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white 
                         rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {storedMiners.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-3xl w-full max-w-md border border-white/10">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Stored Miners</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              {(!storedMiners || storedMiners.length === 0) ? (
                <div className="text-center py-8 text-gray-400">
                  <Inbox className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No stored miners available</p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-4">
                  {storedMiners.map((miner) => (
                    <div
                      key={miner.id}
                      className="relative"
                    >
                      <ModernWorker
                        worker={miner}
                        onClick={() => {
                          if (hasAvailableSpace) {
                            onUseMiner(miner);
                            if (storedMiners.length === 1) {
                              setIsOpen(false);
                            }
                          }
                        }}
                        balance={balance}
                      />
                      {!hasAvailableSpace && (
                        <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                          <p className="text-xs text-red-400">No space</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}