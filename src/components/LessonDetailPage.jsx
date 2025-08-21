import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

// Hàm xáo trộn mảng (Fisher-Yates Shuffle)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function LessonHSK3Page() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lessonNumber = parseInt(lessonId, 10);

  // Import dữ liệu bài học
  let lessonData;
  try {
    lessonData = require(`../../data/hsk3/bai${lessonNumber}.js`).default;
  } catch (error) {
    lessonData = null;
  }

  // **Shuffle ngay khi khởi tạo state**
  const [shuffledLessonData] = useState(() =>
    lessonData ? shuffleArray(lessonData) : []
  );

  const goToLesson = (num) => {
    navigate(`/hsk3/hoctheobai/viettiengtrung/bai${num}`);
  };

  // Kiểm tra hợp lệ bài học
  if (lessonNumber < 1 || lessonNumber > 20) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-red-100 rounded-xl">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold mb-2">Bài học không tồn tại!</h2>
          <p>Chỉ có từ bài 1 đến 20</p>
          <Link
            to="/lessons/hsk3"
            className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Quay lại
          </Link>
        </div>
      </div>
    );
  }

  if (!lessonData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-red-100 rounded-xl">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-xl font-bold mb-2">Không tìm thấy dữ liệu</h2>
          <p>Bài {lessonNumber} chưa có dữ liệu</p>
          <Link
            to="/lessons/hsk3"
            className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Quay lại
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black mb-2">HSK3 - Bài {lessonNumber}</h1>
          <p className="text-lg text-slate-600">Học theo bài - Từ vựng cơ bản</p>
        </div>

        {/* Vocabulary Cards */}
        <div className="grid gap-4 md:gap-6 mb-8">
          {shuffledLessonData.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl font-black">{item.word}</span>
                    <span className="text-lg text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full">
                      {item.pinyin}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-purple-600 font-semibold bg-purple-50 px-2 py-1 rounded-lg">
                      Nghĩa:
                    </span>
                    <span className="text-lg text-slate-700 font-medium">{item.meaning}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mb-8">
          {lessonNumber > 1 ? (
            <button
              onClick={() => goToLesson(lessonNumber - 1)}
              className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              ⬅️ Bài {lessonNumber - 1}
            </button>
          ) : (
            <div></div>
          )}

          {lessonNumber < 20 ? (
            <button
              onClick={() => goToLesson(lessonNumber + 1)}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Bài {lessonNumber + 1} ➡️
            </button>
          ) : (
            <div></div>
          )}
        </div>

        <div className="text-center">
          <Link
            to="/lessons/hsk3"
            className="px-6 py-3 bg-white/90 backdrop-blur-lg rounded-lg shadow hover:bg-white"
          >
            🏠 Quay lại danh sách bài học
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LessonHSK3Page;
