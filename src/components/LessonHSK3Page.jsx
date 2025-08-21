import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function LessonHSK3Page() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lessonNumber = parseInt(lessonId, 10);

  // dữ liệu + vòng chơi
  const [baseWords, setBaseWords] = useState([]);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isReview, setIsReview] = useState(false); // đang ôn từ sai

  // trạng thái câu hiện tại
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);

  // thống kê
  const [correctCount, setCorrectCount] = useState(0);       // số lần trả lời đúng
  const [wrongAttempts, setWrongAttempts] = useState(0);     // tổng số lần sai
  const [wrongCounts, setWrongCounts] = useState({});        // key -> số lần sai
  const [wrongPool, setWrongPool] = useState([]);            // danh sách từ cần ôn lại (unique)
  const [finished, setFinished] = useState(false);

  // tạo key ổn định cho từ (ưu tiên id, fallback chinese)
  const getKey = (w) => (w?.id ?? w?.chinese ?? JSON.stringify(w));

  useEffect(() => {
    setLoading(true);
    import(`../data/datatheobaihsk3/bai${lessonNumber}.js`)
      .then((module) => {
        const data = module.default || [];
        setBaseWords(data);
        setWords(data);
        setIsReview(false);

        // reset session
        setCurrentIndex(0);
        setUserAnswer("");
        setFeedback(null);
        setCorrectCount(0);
        setWrongAttempts(0);
        setWrongCounts({});
        setWrongPool([]);
        setFinished(false);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Không tải được dữ liệu:", err);
        setLoading(false);
      });
  }, [lessonNumber]);

  const remainingInRound = useMemo(
    () => Math.max(words.length - currentIndex, 0),
    [words.length, currentIndex]
  );

  const addToWrongPool = (word) => {
    const key = getKey(word);
    setWrongCounts((prev) => ({ ...prev, [key]: (prev[key] || 0) + 1 }));
    setWrongAttempts((n) => n + 1);
    setWrongPool((prev) => {
      // đảm bảo unique theo key
      const exists = prev.some((w) => getKey(w) === key);
      return exists ? prev : [...prev, word];
    });
  };

  const removeFromWrongPoolIfPresent = (word) => {
    const key = getKey(word);
    setWrongPool((prev) => prev.filter((w) => getKey(w) !== key));
  };

  const checkAnswer = () => {
    if (!userAnswer.trim()) return;
    const current = words[currentIndex];
    const correctAnswer = String(current.chinese || "").trim();
    const user = userAnswer.trim();

    if (user === correctAnswer) {
      setFeedback("✅ Đúng rồi!");
      setCorrectCount((c) => c + 1);
      // nếu từ này từng sai, khi đã đúng thì bỏ khỏi danh sách cần ôn
      removeFromWrongPoolIfPresent(current);
    } else {
      setFeedback(`❌ Sai! Đúng: ${correctAnswer}`);
      addToWrongPool(current);
    }
  };

  const nextQuestion = () => {
    // sang câu kế trong lượt hiện tại
    if (currentIndex + 1 < words.length) {
      setCurrentIndex((i) => i + 1);
      setUserAnswer("");
      setFeedback(null);
      return;
    }

    // hết lượt hiện tại
    if (!isReview) {
      // lượt đầu → nếu có từ sai thì chuyển sang ôn lại
      if (wrongPool.length > 0) {
        setIsReview(true);
        setWords(wrongPool);        // set bộ câu hỏi thành các từ sai
        setCurrentIndex(0);
        setUserAnswer("");
        setFeedback(null);
        return;
      }
      // không có từ sai → hoàn thành
      setFinished(true);
      return;
    }

    // đang ôn lại: nếu vẫn còn từ sai (wrongPool có thể đã bị remove dần khi trả lời đúng)
    if (wrongPool.length > 0) {
      // chạy thêm một vòng ôn các từ còn sai
      setWords(wrongPool);
      setCurrentIndex(0);
      setUserAnswer("");
      setFeedback(null);
    } else {
      // đã làm đúng hết toàn bộ từ sai
      setFinished(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (!feedback) {
        checkAnswer();
      } else {
        nextQuestion();
      }
    }
  };

  const goToLesson = (num) => {
    navigate(`/hsk3/hoctheobai/viettiengtrung/bai/${num}`);
  };

  const startReviewNow = () => {
    if (wrongPool.length === 0) return;
    setIsReview(true);
    setWords(wrongPool);
    setCurrentIndex(0);
    setUserAnswer("");
    setFeedback(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl text-gray-600 animate-pulse">Đang tải bài học...</p>
      </div>
    );
  }

  if (!words || words.length === 0) {
    return (
      <div className="text-center text-2xl text-red-500">
        Không tìm thấy dữ liệu cho bài {lessonNumber}
      </div>
    );
  }

  const currentWord = words[currentIndex];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">
        HSK3 - Game luyện tập: Bài {lessonNumber}
      </h1>

      {/* Thanh trạng thái / thống kê */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
        {isReview && (
          <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 border border-yellow-300">
            🔁 Đang ôn lại từ sai
          </span>
        )}
        <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700 border border-green-300">
          ✅ Đúng: {correctCount}
        </span>
        <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-700 border border-red-300">
          ❌ Sai (lần): {wrongAttempts}
        </span>
        <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700 border border-purple-300">
          📚 Cần ôn lại: {wrongPool.length} từ
        </span>
        <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 border border-gray-300">
          ⏳ Còn lại (lượt này): {remainingInRound}
        </span>
      </div>

      {finished ? (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-4">
            🎉 Hoàn thành! Bạn đã làm đúng hết tất cả từ (kể cả các từ sai).
          </h2>
          <div className="space-x-2">
            {lessonNumber > 1 && (
              <button
                onClick={() => goToLesson(lessonNumber - 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-3 rounded-lg text-lg"
              >
                ← Bài {lessonNumber - 1}
              </button>
            )}
            <button
              onClick={() => goToLesson(lessonNumber + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg text-lg"
            >
              Bài {lessonNumber + 1} →
            </button>
          </div>
          <div className="mt-4">
            <Link to="/hsk3/hoctheobai" className="text-blue-500 hover:underline text-lg">
              Quay lại danh sách bài
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* Câu hỏi */}
          <div className="mb-6">
            <p className="text-2xl mb-4 font-semibold">
              Nghĩa: <span className="text-gray-800">{currentWord?.meaning}</span>
            </p>

            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Nhập tiếng Trung"
              className="border-2 border-gray-300 rounded-lg px-6 py-3 w-full max-w-md text-center text-2xl"
              autoFocus
            />

            <div className="mt-6">
              {feedback ? (
                <p
                  className={`text-2xl font-bold mb-4 ${
                    feedback.includes("✅") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {feedback}
                </p>
              ) : (
                <button
                  onClick={checkAnswer}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-xl"
                >
                  Kiểm tra
                </button>
              )}
            </div>
          </div>

          {/* Ví dụ sau khi check */}
          {feedback && (
            <div className="mt-6">
              {currentWord?.example && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 text-left">
                  <p className="text-gray-800">
                    <span className="font-semibold">Ví dụ:</span> {currentWord.example.sentence}
                  </p>
                  <p className="text-sm text-gray-500">{currentWord.example.pinyin}</p>
                  <p className="text-sm text-gray-500 italic">{currentWord.example.translation}</p>
                </div>
              )}

              <button
                onClick={nextQuestion}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-xl"
              >
                Câu tiếp theo →
              </button>
              <p className="text-gray-500 mt-2 text-sm">(Ấn Enter để sang câu tiếp theo)</p>
            </div>
          )}

          {/* Nút vào chế độ ôn lại ngay (tuỳ chọn) */}
          {!isReview && wrongPool.length > 0 && !feedback && (
            <div className="mt-6">
              <button
                onClick={startReviewNow}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded-lg text-lg"
              >
                🔁 Ôn lại các từ đã sai ({wrongPool.length})
              </button>
            </div>
          )}

          {/* Điều hướng bài */}
          <div className="flex justify-between mt-10">
            {lessonNumber > 1 ? (
              <button
                onClick={() => goToLesson(lessonNumber - 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              >
                ← Bài {lessonNumber - 1}
              </button>
            ) : (
              <div />
            )}
            {lessonNumber < 20 ? (
              <button
                onClick={() => goToLesson(lessonNumber + 1)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Bài {lessonNumber + 1} →
              </button>
            ) : (
              <div />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default LessonHSK3Page;