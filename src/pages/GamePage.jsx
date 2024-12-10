import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TicTacToe from '../components/games/TicTacToe';
import MemoryCard from '../components/games/MemoryCard';
import SnakeGame from '../components/games/SnakeGame';

const gameBackgrounds = {
  tictactoe: "url('https://img.freepik.com/free-vector/geometric-grid-pattern-background_53876-89275.jpg')",
  memory: "url('https://img.freepik.com/free-vector/gradient-geometric-pattern-background_23-2149120340.jpg')",
  snake: "url('https://img.freepik.com/free-vector/pixel-art-mysterious-game-background_52683-87091.jpg')"
};

function GamePage() {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    { 
      id: 'tictactoe', 
      title: 'Tic Tac Toe', 
      component: TicTacToe,
      description: 'Game cờ ca rô cổ điển, thách thức trí tuệ của bạn!',
      icon: '❌⭕',
      color: 'from-purple-500 to-indigo-600'
    },
    { 
      id: 'memory', 
      title: 'Memory Card', 
      component: MemoryCard,
      description: 'Thử thách trí nhớ với trò chơi lật thẻ hấp dẫn',
      icon: '🎴🃏',
      color: 'from-pink-500 to-rose-600'
    },
    { 
      id: 'snake', 
      title: 'Snake Game', 
      component: SnakeGame,
      description: 'Game rắn săn mồi kinh điển, càng chơi càng nhanh',
      icon: '🐍🍎',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-[#593E67] to-[#84495F] py-20">
      <div className="container mx-auto px-6 pt-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white text-center mb-8"
        >
          🎮 Mini Games 🎮
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-200 mb-12 text-xl"
        >
          Chọn một trò chơi và thử thách bản thân!
        </motion.p>

        {!selectedGame ? (
          <div className="grid md:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`bg-gradient-to-br ${game.color} rounded-xl p-6 cursor-pointer shadow-xl transform transition-all duration-300`}
                onClick={() => setSelectedGame(game)}
              >
                <div className="text-4xl mb-4 text-center">{game.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center">{game.title}</h3>
                <p className="text-gray-100 mb-4 text-center">{game.description}</p>
                <div className="text-center">
                  <button className="bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30 transition-colors font-medium">
                    Chơi ngay
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={() => setSelectedGame(null)}
                className="bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30 transition-colors font-medium flex items-center"
              >
                ← Quay lại
              </button>
              <h2 className="text-3xl font-bold text-white">{selectedGame.title}</h2>
            </div>
            <div 
              className="game-container rounded-lg overflow-hidden"
              style={{
                backgroundImage: gameBackgrounds[selectedGame.id],
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <selectedGame.component />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default GamePage; 