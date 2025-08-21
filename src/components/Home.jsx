import React, { useState, useEffect } from 'react';

function Home() {
  const [currentStats, setCurrentStats] = useState({ users: 0, words: 0, success: 0 });
  const [activeLevel, setActiveLevel] = useState(null);
  
  // Subtle counter animation
  useEffect(() => {
    const animateCount = (target, key, duration = 2500) => {
      let start = 0;
      const increment = target / (duration / 30);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setCurrentStats(prev => ({ ...prev, [key]: Math.floor(start) }));
      }, 30);
    };
    
    setTimeout(() => {
      animateCount(15000, 'users');
      animateCount(12000, 'words');
      animateCount(95, 'success');
    }, 800);
  }, []);

  const hskLevels = [
    { 
      level: 'HSK 1', 
      words: 150, 
      description: 'Nền tảng từ vựng cơ bản và cấu trúc ngữ pháp đầu tiên', 
      path: '/vocabulary',
      difficulty: 'Cơ bản',
      timeEstimate: '2-3 tháng',
      skills: ['Giao tiếp đơn giản', 'Từ vựng hằng ngày', 'Ngữ pháp cơ bản']
    },
    { 
      level: 'HSK 2', 
      words: 300, 
      description: 'Mở rộng vốn từ vựng và nâng cao khả năng giao tiếp', 
      path: '/vocabulary',
      difficulty: 'Sơ cấp',
      timeEstimate: '3-4 tháng',
      skills: ['Hội thoại cơ bản', 'Đọc hiểu đơn giản', 'Viết câu ngắn']
    },
    { 
      level: 'HSK 3', 
      words: 600, 
      description: 'Đạt trình độ trung cấp với khả năng giao tiếp thành thạo', 
      path: '/hsk3',
      difficulty: 'Trung cấp',
      timeEstimate: '4-6 tháng',
      skills: ['Giao tiếp lưu loát', 'Đọc báo đơn giản', 'Viết đoạn văn'],
      recommended: true
    },
  ];

  const achievements = [
    {
      title: 'Phương pháp khoa học',
      description: 'Dựa trên nghiên cứu về tâm lý học nhận thức và khoa học não bộ',
      icon: '🔬'
    },
    {
      title: 'Giảng viên chuyên nghiệp',
      description: 'Đội ngũ giáo viên có bằng cấp quốc tế và kinh nghiệm giảng dạy',
      icon: '🎓'
    },
    {
      title: 'Chứng nhận HSK',
      description: 'Chuẩn bị toàn diện cho kỳ thi HSK chính thức của Hanban',
      icon: '📜'
    },
    {
      title: 'Hỗ trợ 24/7',
      description: 'Đội ngũ hỗ trợ học thuật sẵn sàng giải đáp mọi thắc mắc',
      icon: '🤝'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 opacity-70"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Nền tảng học HSK hàng đầu Việt Nam
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Thành thạo tiếng Trung<br />
              <span className="text-blue-600">chuẩn quốc tế HSK</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Hệ thống học tập toàn diện với phương pháp khoa học, giúp bạn đạt chứng chỉ HSK 
              và sử dụng tiếng Trung thành thạo trong công việc và cuộc sống.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg">
                Đăng ký học thử miễn phí
              </button>
              <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-200">
                Tư vấn lộ trình học
              </button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {currentStats.users.toLocaleString()}+
                </div>
                <div className="text-slate-600 font-medium">Học viên tin tưởng</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {currentStats.words.toLocaleString()}+
                </div>
                <div className="text-slate-600 font-medium">Từ vựng được học</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {currentStats.success}%
                </div>
                <div className="text-slate-600 font-medium">Tỉ lệ đậu HSK</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HSK Levels Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Chọn trình độ phù hợp với bạn
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Mỗi cấp độ HSK được thiết kế theo tiêu chuẩn quốc tế, 
            đảm bảo bạn học đúng trình tự và hiệu quả nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hskLevels.map((level, index) => (
            <div
              key={level.level}
              className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                level.recommended 
                  ? 'border-blue-500 shadow-lg' 
                  : 'border-slate-200 hover:border-slate-300'
              } ${activeLevel === index ? 'scale-105 shadow-2xl' : ''}`}
              onMouseEnter={() => setActiveLevel(index)}
              onMouseLeave={() => setActiveLevel(null)}
            >
              {level.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Được khuyên dùng
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">{level.level}</h3>
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
                    {level.difficulty}
                  </div>
                  <p className="text-slate-600 leading-relaxed">{level.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Từ vựng:</span>
                    <span className="font-semibold text-slate-900">{level.words} từ</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Thời gian:</span>
                    <span className="font-semibold text-slate-900">{level.timeEstimate}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-3">Kỹ năng đạt được:</h4>
                  <ul className="space-y-2">
                    {level.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 ${
                    level.recommended
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                  onClick={() => window.location.href = level.path}
                >
                  Bắt đầu học {level.level}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vocabulary Review Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ôn luyện từ vựng HSK
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Củng cố kiến thức với các phương pháp ôn tập đa dạng và hiệu quả
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Flashcard Review */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Flashcard thông minh</h3>
                <p className="text-slate-600 mb-6">
                  Ôn tập từ vựng với thuật toán lặp lại ngắt quãng, tối ưu hóa khả năng ghi nhớ
                </p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  AI điều chỉnh độ khó theo tiến độ
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Theo dõi tỉ lệ ghi nhớ từng từ
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Phát âm chuẩn bằng giọng bản ngữ
                </div>
              </div>
              <button 
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                onClick={() => window.location.href = '/vocabulary'}
              >
                Bắt đầu ôn tập
              </button>
            </div>

            {/* Quiz Mode */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Kiểm tra trắc nghiệm</h3>
                <p className="text-slate-600 mb-6">
                  Đánh giá khả năng ghi nhớ với các bài kiểm tra đa dạng và thú vị
                </p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Nhiều dạng bài: nhận diện, điền từ, nghe
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Thống kê chi tiết kết quả
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Xếp hạng với bạn bè
                </div>
              </div>
              <button 
                className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
                onClick={() => window.location.href = '/quiz'}
              >
                Làm bài kiểm tra
              </button>
            </div>

            {/* HSK Test Simulation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 md:col-span-2 lg:col-span-1">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Tổng hợp các kiểu ôn luyện</h3>
                <p className="text-slate-600 mb-6">
                  Mô phỏng kỳ thi HSK thực tế với các dạng bài tập đa dạng,
                </p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Đề thi chuẩn theo quy định Hanban
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Chấm điểm tự động và phân tích
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Dự đoán khả năng đậu thi thật
                </div>
              </div>
              <button 
                className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                onClick={() => window.location.href = '/hsk3'}
              >
                Ôn tập HSK 3
              </button>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Theo dõi tiến độ học tập
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Hệ thống thống kê chi tiết giúp bạn nắm rõ tiến độ học tập, 
                  điểm mạnh và điểm cần cải thiện để tối ưu hóa quá trình học.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold text-sm">📊</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Báo cáo chi tiết</div>
                      <div className="text-sm text-slate-600">Thống kê từng kỹ năng và cấp độ</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold text-sm">🎯</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Đề xuất cá nhân hóa</div>
                      <div className="text-sm text-slate-600">AI gợi ý lộ trình học phù hợp</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold text-sm">⏱️</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Nhắc nhở thông minh</div>
                      <div className="text-sm text-slate-600">Lịch học và ôn tập tối ưu</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-bold text-slate-900 mb-4">Tiến độ tuần này</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Từ vựng đã học</span>
                      <span className="font-semibold text-slate-900">245/300</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '82%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Bài thi thử hoàn thành</span>
                      <span className="font-semibold text-slate-900">8/10</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Thời gian học hôm nay</span>
                      <span className="font-semibold text-slate-900">45 phút</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Tại sao chọn chúng tôi?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Cam kết mang đến chất lượng giáo dục tốt nhất với phương pháp hiện đại 
              và đội ngũ giảng viên chuyên nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors duration-200">
                <div className="text-4xl mb-4 opacity-80">{achievement.icon}</div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sẵn sàng bắt đầu hành trình học HSK?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Tham gia cùng hàng ngàn học viên đã thành công đạt chứng chỉ HSK 
            và mở ra cơ hội nghề nghiệp mới.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg">
              Đăng ký ngay hôm nay
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              Liên hệ tư vấn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;