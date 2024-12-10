import React, { useState, useEffect, useCallback } from 'react';

function SnakeGame() {
  const [snake, setSnake] = useState([[0, 0]]);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(200);

  const generateFood = useCallback(() => {
    const newFood = [
      Math.floor(Math.random() * 20),
      Math.floor(Math.random() * 20)
    ];
    setFood(newFood);
  }, []);

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    const newSnake = [...snake];
    let head = [...newSnake[0]];

    switch (direction) {
      case 'UP':
        head[1] -= 1;
        break;
      case 'DOWN':
        head[1] += 1;
        break;
      case 'LEFT':
        head[0] -= 1;
        break;
      case 'RIGHT':
        head[0] += 1;
        break;
      default:
        break;
    }

    // Kiểm tra va chạm
    if (
      head[0] < 0 || head[0] >= 20 ||
      head[1] < 0 || head[1] >= 20 ||
      snake.some(segment => segment[0] === head[0] && segment[1] === head[1])
    ) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);

    // Kiểm tra ăn thức ăn
    if (head[0] === food[0] && head[1] === food[1]) {
      setScore(score + 1);
      generateFood();
      setSpeed(prevSpeed => Math.max(prevSpeed - 10, 50));
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [snake, direction, food, gameOver, score, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection(prev => prev !== 'DOWN' ? 'UP' : prev);
          break;
        case 'ArrowDown':
          setDirection(prev => prev !== 'UP' ? 'DOWN' : prev);
          break;
        case 'ArrowLeft':
          setDirection(prev => prev !== 'RIGHT' ? 'LEFT' : prev);
          break;
        case 'ArrowRight':
          setDirection(prev => prev !== 'LEFT' ? 'RIGHT' : prev);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, speed);
    return () => clearInterval(gameInterval);
  }, [moveSnake, speed]);

  const resetGame = () => {
    setSnake([[0, 0]]);
    setFood([5, 5]);
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setSpeed(200);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Snake Game</h2>
      <div className="mb-4 text-white">Score: {score}</div>
      <div className="relative w-[400px] h-[400px] bg-gradient-to-br from-green-900 to-green-800 border-2 border-white rounded-lg">
        {/* Vẽ con rắn */}
        {snake.map((segment, i) => {
          const isHead = i === 0;
          const isLastSegment = i === snake.length - 1;
          const prevSegment = i > 0 ? snake[i - 1] : null;
          const nextSegment = i < snake.length - 1 ? snake[i + 1] : null;
          
          // Xác định hướng cho từng phần của rắn
          let rotation = 0;
          if (isHead) {
            switch(direction) {
              case 'UP': rotation = 0; break;
              case 'RIGHT': rotation = 90; break;
              case 'DOWN': rotation = 180; break;
              case 'LEFT': rotation = 270; break;
            }
          }

          return (
            <div
              key={i}
              className={`absolute transition-all duration-100`}
              style={{
                left: `${segment[0] * 20}px`,
                top: `${segment[1] * 20}px`,
                width: '20px',
                height: '20px',
                transform: `rotate(${rotation}deg)`,
              }}
            >
              {isHead ? (
                // Đầu rắn
                <div className="w-full h-full relative">
                  <div className="absolute w-full h-full bg-green-400 rounded-full">
                    {/* Mắt rắn */}
                    <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
              ) : isLastSegment ? (
                // Đuôi rắn
                <div className="w-full h-full bg-green-500 rounded-full transform scale-75"></div>
              ) : (
                // Thân rắn
                <div className="w-full h-full">
                  <div className="absolute w-full h-full bg-green-400 rounded-full">
                    {/* Vân rắn */}
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-green-300 rounded-full opacity-50"></div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Vẽ thức ăn */}
        <div
          className="absolute w-5 h-5 transition-all duration-200"
          style={{
            left: `${food[0] * 20}px`,
            top: `${food[1] * 20}px`,
          }}
        >
          <div className="w-full h-full relative animate-bounce">
            <div className="absolute w-full h-full bg-red-500 rounded-full">
              {/* Cuống táo */}
              <div className="absolute -top-1 left-1/2 w-1 h-2 bg-green-800 transform -translate-x-1/2"></div>
              {/* Lá táo */}
              <div className="absolute -top-2 left-1/2 w-2 h-2 bg-green-500 rounded-full transform -translate-x-1/2 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Nút điều khiển cho mobile */}
      <div className="mt-8 grid grid-cols-3 gap-2 md:hidden">
        <button onClick={() => setDirection('LEFT')} className="p-4 bg-white/20 rounded-lg">←</button>
        <div className="grid grid-rows-2 gap-2">
          <button onClick={() => setDirection('UP')} className="p-4 bg-white/20 rounded-lg">↑</button>
          <button onClick={() => setDirection('DOWN')} className="p-4 bg-white/20 rounded-lg">↓</button>
        </div>
        <button onClick={() => setDirection('RIGHT')} className="p-4 bg-white/20 rounded-lg">→</button>
      </div>

      {gameOver && (
        <div className="mt-4">
          <p className="text-white mb-2">Game Over! Score: {score}</p>
          <button
            onClick={resetGame}
            className="bg-[#FEA837] text-white px-4 py-2 rounded-lg hover:bg-[#DE741C]"
          >
            Chơi lại
          </button>
        </div>
      )}
    </div>
  );
}

export default SnakeGame; 