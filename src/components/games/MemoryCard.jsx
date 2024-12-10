import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const cardImages = [
  { src: '🐶', matched: false },
  { src: '🐱', matched: false },
  { src: '🐭', matched: false },
  { src: '🐹', matched: false },
  { src: '🐰', matched: false },
  { src: '🦊', matched: false },
];

function MemoryCard() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));
    
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Memory Card</h2>
      <button 
        onClick={shuffleCards}
        className="bg-[#FEA837] text-white px-4 py-2 rounded-lg hover:bg-[#DE741C] mb-4"
      >
        Game Mới
      </button>
      <div className="grid grid-cols-4 gap-4">
        {cards.map(card => (
          <motion.div 
            key={card.id}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <motion.div
              className={`w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl cursor-pointer
                ${card === choiceOne || card === choiceTwo || card.matched ? 'flipped' : ''}`}
              onClick={() => !disabled && !card.matched && card !== choiceOne && handleChoice(card)}
            >
              {(card === choiceOne || card === choiceTwo || card.matched) ? card.src : '?'}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <p className="mt-4 text-white">Số lượt: {turns}</p>
    </div>
  );
}

export default MemoryCard; 