import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LessonSelectionPage = () => {
  const navigate = useNavigate();
  const totalLessons = 20;
  const [unlockedLessons, setUnlockedLessons] = useState(1);

  useEffect(() => {
    const savedProgress = localStorage.getItem("progress-hsk3");
    if (savedProgress) {
      setUnlockedLessons(parseInt(savedProgress, 10));
    }
  }, []);

  const handleLessonClick = (index) => {
    if (index + 1 <= unlockedLessons) {
      navigate(`/lesson/hsk3/${index + 1}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-red-100 p-6">
      <h1 className="text-3xl font-bold text-orange-700 mb-4 text-center">
        📚 Học theo bài - HSK3
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: totalLessons }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleLessonClick(index)}
            disabled={index + 1 > unlockedLessons}
            className={`py-3 px-4 rounded-xl font-semibold shadow-md transition-all ${
              index + 1 <= unlockedLessons
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Bài {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LessonSelectionPage;
