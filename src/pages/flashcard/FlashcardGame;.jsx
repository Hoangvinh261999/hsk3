import React, { useState } from 'react';
import flashcards from '../../data/hskvocabAll'; // Assuming you have a flashcardsData.js file with your flashcard data

const FlashcardGame = () => {
  const [flipped, setFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const card = flashcards[currentIndex];

  const handleFlip = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFlipped(!flipped);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcards.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          汉字闪卡 Flashcard Game
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <span>{currentIndex + 1}</span>
          <span>of</span>
          <span>{flashcards.length}</span>
          <div className="ml-4 w-20 bg-gray-200 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / flashcards.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Flashcard Container */}
      <div className="relative w-full max-w-2xl h-[500px] mb-8 perspective-1000">
        <div 
          className={`flashcard-inner w-full h-full relative cursor-pointer transform-style-preserve-3d transition-transform duration-600 ease-in-out ${
            flipped ? 'rotate-y-180' : ''
          } ${isAnimating ? 'pointer-events-none' : ''}`}
          onClick={handleFlip}
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Front Side */}
          <div 
            className="flashcard-face absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white p-10 border-4 border-white/20"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="text-center">
              <div className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 drop-shadow-lg">
                {card.chinese}
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-medium opacity-90 tracking-wider">
                {card.pinyin}
              </div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-base opacity-70 animate-pulse">
                👆 Chạm để xem nghĩa
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div 
            className="flashcard-face absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-2xl text-white p-8 border-4 border-white/20 overflow-y-auto"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="space-y-6">
              {/* Meaning */}
              <div className="text-center mb-8">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-200">
                  {card.meaning}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-medium opacity-90">
                  {card.pinyin}
                </div>
              </div>

              {/* Example */}
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-4 text-yellow-300 flex items-center gap-3 text-lg md:text-xl">
                  <span className="text-2xl">📖</span> Ví dụ:
                </h3>
                <div className="space-y-3  text-xl">
                  <p className="font-semibold text-white text-4xl">{card.example.sentence}</p>
                  <p className="opacity-90 italic font-medium text-xl">{card.example.pinyin}</p>
                  <p className="text-yellow-100 font-medium text-xl">→ {card.example.translation}</p>
                </div>
              </div>

              {/* Usage */}
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-4 text-yellow-300 flex items-center gap-3 text-lg md:text-xl">
                  <span className="text-2xl">💡</span> Ghi chú:
                </h3>
                <p className=" text-xl opacity-90 font-medium leading-relaxed">{card.usage}</p>
              </div>

              <div className="text-center mt-6 text-base opacity-70">
                👆 Chạm để quay lại
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className="bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <span>←</span> Trước
        </button>
        
        <button
          onClick={handleFlip}
          disabled={isAnimating}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {flipped ? '🔄 Lật lại' : '🔍 Xem nghĩa'}
        </button>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          Sau <span>→</span>
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-8 text-center max-w-md">
        <p className="text-sm text-gray-600 bg-white/60 rounded-lg px-4 py-2 backdrop-blur-sm">
          💡 <strong>Hướng dẫn:</strong> Chạm vào thẻ để lật và xem nghĩa, sử dụng các nút để chuyển thẻ
        </p>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default FlashcardGame;