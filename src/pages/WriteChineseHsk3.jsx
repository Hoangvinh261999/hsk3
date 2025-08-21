import React, { useState, useEffect } from 'react';
import hsk3Words from '../data/hsk3Vocab.js';

const STORAGE_KEY = 'writeChineseProgress';

const WriteChinesePage = () => {
  const [shuffledWords, setShuffledWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [wrongIds, setWrongIds] = useState([]);
  const [repeatMode, setRepeatMode] = useState(false);
  const [initialTotal, setInitialTotal] = useState(0);

  useEffect(() => {
    localStorage.removeItem(STORAGE_KEY);
    const shuffled = shuffleArray([...hsk3Words]);
    setShuffledWords(shuffled);
    setInitialTotal(shuffled.length);
    resetStats();
  }, []);

  const resetStats = () => {
    setCorrectCount(0);
    setWrongCount(0);
    setWrongIds([]);
    setCurrentIndex(0);
    setUserInput('');
    setShowResult(false);
    setRepeatMode(false);
  };

  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    if (!showResult) {
      checkAnswer();
    } else {
      handleNext();
    }
  }
};


  const checkAnswer = () => {
    const currentWord = shuffledWords[currentIndex];
    const isAnsCorrect = userInput.trim() === currentWord.chinese;
    setIsCorrect(isAnsCorrect);
    setShowResult(true);

    const updatedCorrect = isAnsCorrect ? correctCount + 1 : correctCount;
    const updatedWrong = isAnsCorrect ? wrongCount : wrongCount + 1;
    const updatedWrongIds = !isAnsCorrect ? [...wrongIds, currentWord.id] : wrongIds;

    setCorrectCount(updatedCorrect);
    setWrongCount(updatedWrong);
    setWrongIds(updatedWrongIds);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= shuffledWords.length) {
      setShowResult(false);
      setUserInput('');
    } else {
      setCurrentIndex(nextIndex);
      setUserInput('');
      setShowResult(false);
    }
  };

  const handleRetryWrong = () => {
    const wrongWords = hsk3Words.filter(word => wrongIds.includes(word.id));
    const reshuffled = shuffleArray(wrongWords);

    setShuffledWords(reshuffled);
    setInitialTotal(reshuffled.length);
    setCurrentIndex(0);
    setCorrectCount(0);
    setWrongCount(0);
    setWrongIds([]);
    setRepeatMode(true);
    setUserInput('');
    setShowResult(false);
  };

  const currentWord = shuffledWords[currentIndex];
  const progressPercentage = initialTotal > 0 ? Math.min((currentIndex + 1) / initialTotal * 100, 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 via-yellow-50 to-pink-50 flex flex-col items-center justify-center px-4  relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-red-200/30 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-16 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-200/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 sm:w-20 sm:h-20 bg-orange-200/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-8 w-8 h-8 sm:w-16 sm:h-16 bg-pink-200/30 rounded-full animate-bounce"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-1 sm:mb-1 lg:mb-4 z-10 relative">
        <h1 className="text-xl sm:text-xl md:text-6xl lg:text-2xl font-black bg-gradient-to-r from-red-600 via-orange-500 via-yellow-500 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4 drop-shadow-lg animate-pulse">
          写汉字
        </h1>
        <p className="text-lg sm:text-xl md:text-xl text-gray-700 font-bold tracking-wide">Viết tiếng Trung</p>
        <div className="mt-2 w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mb-6 sm:mb-8 z-10 relative">
        <div className="flex justify-between text-base sm:text-lg font-bold text-gray-700 mb-3">
          <span className="text-purple-600">Tiến độ</span>
          <span className="text-blue-600">{Math.min(currentIndex + 1, initialTotal)} / {initialTotal}</span>
        </div>
        <div className="w-full bg-gray-300/60 rounded-full h-4 sm:h-5 overflow-hidden shadow-inner backdrop-blur-sm">
          <div 
            className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden"
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          </div>
        </div>
        <div className="text-center mt-2 text-sm sm:text-base font-semibold text-gray-600">
          {Math.round(progressPercentage)}% hoàn thành
        </div>
      </div>

      {currentWord ? (
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl sm:rounded-[2rem] shadow-2xl border-2 border-white/40 p-6 sm:p-8 lg:p-10 w-full max-w-sm sm:max-w-lg lg:max-w-2xl text-center transform transition-all duration-500 hover:scale-105 hover:shadow-3xl z-10 relative">
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-pink-400 rounded-full animate-bounce"></div>
          
          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-gray-500 uppercase tracking-wider font-bold mb-3 sm:mb-4">Nghĩa tiếng Việt</p>
            <p className="text-xl sm:text-xl md:text-xl font-black text-gray-800 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent leading-tight">
              {currentWord.meaning}
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="输入汉字..."
              className="w-full px-6 sm:px-8 py-4 sm:py-5 text-xl sm:text-xl md:text-xl text-center border-3 border-gray-300 rounded-2xl sm:rounded-3xl focus:border-blue-500 focus:ring-8 focus:ring-blue-200/50 transition-all duration-300 bg-gray-50/80 focus:bg-white outline-none font-bold shadow-lg hover:shadow-xl backdrop-blur-sm"
              autoFocus
            />
          </div>

          {!showResult ? (
            <button
              onClick={checkAnswer}
              className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white px-8 sm:px-10 py-4 sm:py-4 rounded-2xl sm:rounded-3xl hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 font-black text-lg sm:text-xl md:text-xl shadow-2xl hover:shadow-3xl transform hover:scale-110 active:scale-95 border-2 border-white/20 animate-pulse hover:animate-none"
            >
              🔍 kiểm tra
            </button>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              <div className={`p-2 sm:p-6 rounded-2xl sm:rounded-3xl border-4 shadow-xl transform transition-all duration-500 ${isCorrect ? 'bg-gradient-to-br from-green-100 to-emerald-100 border-green-400 animate-bounce' : 'bg-gradient-to-br from-red-100 to-rose-100 border-red-400 animate-shake'}`}>
                <p className={`text-xl sm:text-xl md:text-xl font-black ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  {isCorrect ? (
                    <span className="flex items-center justify-center gap-3 sm:gap-4">
                      <span className="text-xl sm:text-xl animate-bounce">✨</span>
                      <span>Đúng rồi! Tuyệt vời!</span>
                      <span className="text-xl sm:text-xl animate-bounce">🎉</span>
                    </span>
                  ) : (
                    <span className="flex flex-col gap-3 sm:gap-4">
                      <span className="text-xl sm:text-xl animate-pulse">❌ Sai rồi!</span>
                      <span className="text-xl sm:text-xl md:text-xl font-black text-gray-800">
                        Đáp án đúng: <span className="text-red-600 bg-red-100 px-3 py-1 rounded-xl">{currentWord.chinese} - {currentWord.pinyin}</span>
                      </span>
                    </span>
                  )}
                </p>
              </div>

              {/* Example section */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-left text-sm sm:text-base md:text-lg text-gray-700 shadow-lg">
                <div className="space-y-2 sm:space-y-3">
                  <p className="font-bold text-amber-800"><span className="text-lg sm:text-xl">📖</span> <strong>Ví dụ:</strong> <span className="text-gray-900 font-semibold">{currentWord.example?.sentence}</span></p>
                  <p className="font-bold text-amber-800"><span className="text-lg sm:text-xl">🌏</span> <strong>Dịch:</strong> <span className="text-gray-900 font-semibold">{currentWord.example?.translation}</span></p>
                  <p className="font-bold text-amber-800"><span className="text-lg sm:text-xl">💡</span> <strong>Bổ sung:</strong> <span className="text-gray-900 font-semibold">{currentWord.usage}</span></p>
                </div>
              </div>

              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 text-white px-8 sm:px-10 py-4 sm:py-4 rounded-2xl sm:rounded-3xl font-black text-lg sm:text-xl hover:from-green-600 hover:via-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-110 active:scale-95 border-2 border-white/20"
              >
                ➡️ tiếp theo
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl sm:rounded-[2rem] shadow-2xl border-2 border-white/40 p-8 sm:p-10 text-center z-10 relative animate-bounce">
          <div className="text-6xl sm:text-2xl mb-6 animate-spin">🎉</div>
          <p className="text-xl sm:text-xl md:text-xl font-black text-gray-700 mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">恭喜完成！</p>
          <p className="text-lg sm:text-xl md:text-xl text-gray-600 font-bold">Đã hoàn thành hết từ vựng!</p>
          <div className="mt-4 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
        </div>
      )}

      {/* Stats */}
<div className="mt-4 grid grid-cols-2 gap-3 w-64 max-w-xs z-10 relative">
  <div className="bg-green-500/20 backdrop-blur-md border border-green-300 rounded-xl p-2 text-center transform hover:scale-105 transition-all duration-300">
    <div className="text-lg mb-1 animate-bounce">✅</div>
    <div className="text-lg font-bold text-green-600 mb-1">{correctCount}</div>
    <div className="text-sm text-green-700 font-medium">Đúng</div>
  </div>
  <div className="bg-red-500/20 backdrop-blur-md border border-red-300 rounded-xl p-2 text-center transform hover:scale-105 transition-all duration-300">
    <div className="text-lg mb-1 animate-pulse">❌</div>
    <div className="text-lg font-bold text-red-600 mb-1">{wrongCount}</div>
    <div className="text-sm text-red-700 font-medium">Sai</div>
  </div>
</div>

      {/* Retry button */}
      {wrongIds.length > 0 && !repeatMode && (
        <button
          onClick={handleRetryWrong}
          className="mt-6 sm:mt-8 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl sm:rounded-3xl hover:from-orange-600 hover:via-red-600 hover:to-pink-700 transition-all duration-300 font-black text-lg sm:text-xl md:text-xl shadow-2xl hover:shadow-3xl transform hover:scale-110 active:scale-95 flex items-center gap-3 sm:gap-4 border-2 border-white/20 z-10 relative animate-pulse hover:animate-none"
        >
          <span className="text-xl sm:text-xl animate-spin">🔄</span>
          <span>LÀM LẠI TỪ SAI ({wrongIds.length})</span>
        </button>
      )}


      {/* Repeat mode indicator */}
      {repeatMode && (
        <div className="mt-4 sm:mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-400 rounded-2xl sm:rounded-3xl shadow-lg z-10 relative">
          <p className="text-orange-700 font-black text-base sm:text-lg md:text-xl flex items-center gap-2 sm:gap-3">
            <span className="animate-spin">🔁</span>
            CHẾ ĐỘ LUYỆN LẠI TỪ SAI
          </p>
        </div>
      )}
    </div>
  );
};

export default WriteChinesePage;