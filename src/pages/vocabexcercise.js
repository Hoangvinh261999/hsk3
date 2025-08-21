import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GameSelectionPage = () => {
  const navigate = useNavigate();
  const [level, setLevel] = useState('3'); // mặc định HSK3
  const [showLessons, setShowLessons] = useState(false);
  const totalLessons = 20; // mỗi cấp có 20 bài (có thể chỉnh)

const handleNavigateLesson = (lesson) => {
  navigate(`/hsk${level}/bai${lesson}`);
};

  const handleNavigateGame = (path) => {
    navigate(`${path}/hsk${level}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-100 to-red-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-700">🎮 Chọn trò chơi</h1>

      {/* Chọn cấp độ HSK */}
      <div className="mb-6 flex gap-4 flex-wrap justify-center">
        {['1', '2', '3'].map((lvl) => (
          <button
            key={lvl}
            onClick={() => setLevel(lvl)}
            className={`px-4 py-2 rounded-xl font-medium shadow-sm transition-all ${
              level === lvl
                ? 'bg-orange-500 text-white'
                : 'bg-white text-orange-600 border border-orange-300 hover:bg-orange-100'
            }`}
          >
            {`HSK ${lvl}`}
          </button>
        ))}
      </div>

      {/* Nút trò chơi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-3xl mb-8">
        <button
          onClick={() => handleNavigateGame('/flashcard')}
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
        >
          📘 Flashcard
        </button>

        <button
          onClick={() => handleNavigateGame('/hsk/write-chinese')}
          className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
        >
          ✍️ Viết tiếng Trung
        </button>

        <button
          onClick={() => handleNavigateGame('/write-vietnamese')}
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
        >
          🇻🇳 Viết nghĩa tiếng Việt
        </button>
      </div>

      {/* Nút học theo bài */}
 <div className="w-full max-w-md">
      <button
        onClick={() => navigate("/hsk3/hoctheobai")}
        className="w-full bg-purple-500 hover:bg-purple-600 text-white text-lg font-semibold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
      >
        📚 Học theo bài HSK3
      </button>
    </div>
    </div>
  );
};

export default GameSelectionPage;
