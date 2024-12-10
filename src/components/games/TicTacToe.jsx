import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function TicTacToe() {
  const [boardSize, setBoardSize] = useState(3);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winLength, setWinLength] = useState(3); // Số ký tự liên tiếp để thắng

  // Khởi tạo lại bảng khi thay đổi kích thước
  useEffect(() => {
    setBoard(Array(boardSize * boardSize).fill(null));
    setXIsNext(true);
    // Tự động điều chỉnh số ký tự cần để thắng dựa trên kích thước bảng
    setWinLength(boardSize >= 7 ? 5 : (boardSize >= 5 ? 4 : 3));
  }, [boardSize]);

  const calculateWinner = (squares) => {
    // Kiểm tra hàng ngang
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j <= boardSize - winLength; j++) {
        const row = Array(winLength).fill(0)
          .map((_, index) => squares[i * boardSize + j + index]);
        if (row.every(cell => cell === 'X') || row.every(cell => cell === 'O')) {
          return row[0];
        }
      }
    }

    // Kiểm tra hàng dọc
    for (let i = 0; i <= boardSize - winLength; i++) {
      for (let j = 0; j < boardSize; j++) {
        const column = Array(winLength).fill(0)
          .map((_, index) => squares[(i + index) * boardSize + j]);
        if (column.every(cell => cell === 'X') || column.every(cell => cell === 'O')) {
          return column[0];
        }
      }
    }

    // Kiểm tra đường chéo chính
    for (let i = 0; i <= boardSize - winLength; i++) {
      for (let j = 0; j <= boardSize - winLength; j++) {
        const diagonal = Array(winLength).fill(0)
          .map((_, index) => squares[(i + index) * boardSize + j + index]);
        if (diagonal.every(cell => cell === 'X') || diagonal.every(cell => cell === 'O')) {
          return diagonal[0];
        }
      }
    }

    // Kiểm tra đường chéo phụ
    for (let i = 0; i <= boardSize - winLength; i++) {
      for (let j = winLength - 1; j < boardSize; j++) {
        const diagonal = Array(winLength).fill(0)
          .map((_, index) => squares[(i + index) * boardSize + j - index]);
        if (diagonal.every(cell => cell === 'X') || diagonal.every(cell => cell === 'O')) {
          return diagonal[0];
        }
      }
    }

    return null;
  };

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (calculateWinner(boardCopy) || boardCopy[i]) return;
    
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(cell => cell !== null);
  const status = winner 
    ? `Người chiến thắng: ${winner}`
    : isDraw
    ? 'Hòa!'
    : `Lượt tiếp theo: ${xIsNext ? 'X' : 'O'}`;

  const resetGame = () => {
    setBoard(Array(boardSize * boardSize).fill(null));
    setXIsNext(true);
  };

  const boardSizes = [
    { size: 3, label: '3x3' },
    { size: 5, label: '5x5' },
    { size: 7, label: '7x7' },
    { size: 16, label: '16x16' },
    { size: 36, label: '36x36' }
  ];

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Tic Tac Toe</h2>
      
      {/* Chọn kích thước bảng */}
      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        {boardSizes.map(({ size, label }) => (
          <motion.button
            key={size}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setBoardSize(size)}
            className={`px-4 py-2 rounded-lg ${
              boardSize === size
                ? 'bg-[#FEA837] text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {label}
          </motion.button>
        ))}
      </div>

      <div className="mb-4 text-white text-xl">{status}</div>
      
      {/* Bảng game */}
      <div 
        className="grid gap-1 bg-white/10 p-2 rounded-lg"
        style={{
          gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))`,
          maxWidth: '90vw',
          maxHeight: '70vh'
        }}
      >
        {board.map((square, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`aspect-square flex items-center justify-center text-lg font-bold 
              bg-white rounded-lg shadow-lg ${
                square === 'X' ? 'text-blue-500' : 'text-red-500'
              }`}
            style={{
              fontSize: `${Math.max(20 - boardSize, 12)}px`,
              minWidth: `${Math.max(40 - boardSize * 2, 20)}px`
            }}
            onClick={() => handleClick(i)}
          >
            {square}
          </motion.button>
        ))}
      </div>

      <button
        onClick={resetGame}
        className="mt-6 bg-[#FEA837] text-white px-6 py-2 rounded-lg hover:bg-[#DE741C] transition-colors"
      >
        Chơi lại
      </button>

      {/* Hiển thị thông tin */}
      <div className="mt-4 text-white text-sm">
        <p>Cần {winLength} ký tự liên tiếp để thắng</p>
      </div>
    </div>
  );
}

export default TicTacToe; 