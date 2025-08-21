import React from 'react';
import { Link } from 'react-router-dom';

function Hsk3LessonList() {
  const lessons = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">
        Học theo bài HSK3
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {lessons.map((lesson) => (
          <Link
            key={lesson}
            to={`/hsk3/hoctheobai/viettiengtrung/bai/${lesson}`}
            className="bg-blue-500 text-white py-2 rounded-lg text-center hover:bg-blue-600 transition"
          >
            Bài {lesson}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hsk3LessonList;
